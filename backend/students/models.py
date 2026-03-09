from django.db import models
from accounts.models import User


class Student(models.Model):
    name = models.CharField(max_length=150)
    student_id = models.CharField(max_length=30, unique=True)
    student_class = models.CharField(max_length=50)
    section = models.CharField(max_length=20, blank=True, null=True)
    parent = models.ForeignKey(
        User, on_delete=models.SET_NULL, null=True, blank=True, related_name="children")
    admission = models.OneToOneField(
        "admissions.AdmissionApplication", on_delete=models.SET_NULL, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.student_id} - {self.name}"
