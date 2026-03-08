from rest_framework import serializers
from .models import Student


class StudentSerializer(serializers.ModelSerializer):
    parent_name = serializers.CharField(
        source="parent.get_full_name", read_only=True)

    class Meta:
        model = Student
        fields = "__all__"
