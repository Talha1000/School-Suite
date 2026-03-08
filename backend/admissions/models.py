from django.db import models
import uuid


class AdmissionApplication(models.Model):
    class StatusChoices(models.TextChoices):
        PENDING = "PENDING", "Pending"
        APPROVED = "APPROVED", "Approved"
        REJECTED = "REJECTED", "Rejected"

    application_id = models.CharField(
        max_length=20, unique=True, editable=False)
    student_name = models.CharField(max_length=150)
    class_applying_for = models.CharField(max_length=50)
    parent_name = models.CharField(max_length=150)
    phone = models.CharField(max_length=20)
    email = models.EmailField(blank=True, null=True)
    address = models.TextField()
    document = models.FileField(
        upload_to="admissions/docs/", blank=True, null=True)
    status = models.CharField(
        max_length=20, choices=StatusChoices.choices, default=StatusChoices.PENDING)
    created_at = models.DateTimeField(auto_now_add=True)

    def save(self, *args, **kwargs):
        if not self.application_id:
            self.application_id = f"APP-{uuid.uuid4().hex[:8].upper()}"
        super().save(*args, **kwargs)

    def __str__(self):
        return f"{self.application_id} - {self.student_name}"
