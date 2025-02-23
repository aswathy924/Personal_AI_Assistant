from rest_framework.response import Response
from rest_framework.decorators import api_view

@api_view(['GET'])
def home_api(request):
    return Response({"message": "Hello from Personal AI Communication Assistant!"})