from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import permission_classes
from .serializers import UserMeSerializer


@api_view(["GET"])
@permission_classes([IsAuthenticated])
def me(request):
    serializer = UserMeSerializer(request.user)
    return Response(serializer.data)


@api_view(["GET"])
@permission_classes([AllowAny])
def auth_routes(request):
    return Response({
        "login": "/api/auth/token/",
        "refresh": "/api/auth/token/refresh/",
        "me": "/api/auth/me/"
    })
