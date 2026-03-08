from rest_framework import serializers
from .models import FeeInvoice


class FeeInvoiceSerializer(serializers.ModelSerializer):
    student_name = serializers.CharField(source="student.name", read_only=True)

    class Meta:
        model = FeeInvoice
        fields = "__all__"
