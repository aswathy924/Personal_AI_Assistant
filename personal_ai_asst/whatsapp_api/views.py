import os
import requests
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json

# Fetch credentials from environment variables
WHATSAPP_ACCESS_TOKEN = os.getenv("WHATSAPP_ACCESS_TOKEN")
WHATSAPP_PHONE_NUMBER_ID = os.getenv("WHATSAPP_PHONE_NUMBER_ID")

@csrf_exempt  # Consider handling CSRF properly instead of disabling it
def send_whatsapp_message(request):
    if request.method != "POST":
        return JsonResponse({"error": "Invalid request method"}, status=405)

    # Check if environment variables are set
    if not WHATSAPP_ACCESS_TOKEN or not WHATSAPP_PHONE_NUMBER_ID:
        return JsonResponse({"error": "Missing WhatsApp API credentials"}, status=500)

    try:
        data = json.loads(request.body)
        recipient_number = data.get("phone")  # WhatsApp phone number
        message_text = data.get("message")  # Message to send

        if not recipient_number or not message_text:
            return JsonResponse({"error": "Missing phone or message"}, status=400)

        url = f"https://graph.facebook.com/v18.0/{WHATSAPP_PHONE_NUMBER_ID}/messages"
        headers = {
            "Authorization": f"Bearer {WHATSAPP_ACCESS_TOKEN}",
            "Content-Type": "application/json",
        }
        payload = {
            "messaging_product": "whatsapp",
            "to": recipient_number,
            "type": "text",
            "text": {"body": message_text},
        }

        # Send request to WhatsApp API
        response = requests.post(url, headers=headers, json=payload)

        # Check for errors in API response
        if response.status_code != 200:
            return JsonResponse({"error": "Failed to send message", "details": response.json()}, status=response.status_code)

        return JsonResponse(response.json(), safe=False)

    except json.JSONDecodeError:
        return JsonResponse({"error": "Invalid JSON format"}, status=400)

    except Exception as e:
        return JsonResponse({"error": "An unexpected error occurred", "details": str(e)}, status=500)
