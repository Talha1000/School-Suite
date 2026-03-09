from rest_framework import serializers
from .models import AdmissionApplication


class AdmissionApplicationSerializer(serializers.ModelSerializer):
    class Meta:
        model = AdmissionApplication
        fields = "__all__"
        read_only_fields = ["application_id", "status", "created_at"]


class AdmissionStatusSerializer(serializers.ModelSerializer):
    class Meta:
        model = AdmissionApplication
        fields = ["application_id", "student_name",
                  "class_applying_for", "status", "created_at"]
