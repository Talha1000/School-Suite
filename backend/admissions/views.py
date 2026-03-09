from rest_framework import generics, status
from rest_framework.permissions import AllowAny
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from .models import AdmissionApplication
from .serializers import AdmissionApplicationSerializer, AdmissionStatusSerializer
from accounts.permissions import IsAdminRole


class AdmissionCreateView(generics.CreateAPIView):
    queryset = AdmissionApplication.objects.all()
    serializer_class = AdmissionApplicationSerializer
    permission_classes = [AllowAny]


class AdmissionListView(generics.ListAPIView):
    queryset = AdmissionApplication.objects.all().order_by("-created_at")
    serializer_class = AdmissionApplicationSerializer
    permission_classes = [IsAdminRole]


@api_view(["GET"])
@permission_classes([AllowAny])
def admission_status_lookup(request, application_id):
    try:
        obj = AdmissionApplication.objects.get(application_id=application_id)
    except AdmissionApplication.DoesNotExist:
        return Response({"detail": "Application not found"}, status=404)

    serializer = AdmissionStatusSerializer(obj)
    return Response(serializer.data)


@api_view(["PATCH"])
@permission_classes([IsAdminRole])
def admission_update_status(request, pk):
    try:
        obj = AdmissionApplication.objects.get(pk=pk)
    except AdmissionApplication.DoesNotExist:
        return Response({"detail": "Application not found"}, status=404)

    new_status = request.data.get("status")
    if new_status not in ["PENDING", "APPROVED", "REJECTED"]:
        return Response({"detail": "Invalid status"}, status=400)

    obj.status = new_status
    obj.save()

    return Response({
        "message": "Status updated successfully",
        "application_id": obj.application_id,
        "status": obj.status
    })
