from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from django.http import JsonResponse
from drf_spectacular.views import (
    SpectacularAPIView,
    SpectacularSwaggerView,
    SpectacularRedocView,
)


def home(request):
    return JsonResponse({
        "message": "School Suite Backend is running"
    })


urlpatterns = [
    path("", home, name="home"),
    path("admin/", admin.site.urls),

    path("api/schema/", SpectacularAPIView.as_view(), name="schema"),
    path("api/docs/", SpectacularSwaggerView.as_view(url_name="schema"),
         name="swagger-ui"),
    path("api/redoc/", SpectacularRedocView.as_view(url_name="schema"), name="redoc"),

    path("api/", include("core.urls")),
    path("api/auth/", include("accounts.urls")),
    path("api/admissions/", include("admissions.urls")),
    path("api/students/", include("students.urls")),
    path("api/notices/", include("notices.urls")),
    path("api/attendance/", include("attendance.urls")),
    path("api/fees/", include("fees.urls")),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL,
                          document_root=settings.MEDIA_ROOT)
