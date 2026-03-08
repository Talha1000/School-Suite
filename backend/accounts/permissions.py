from rest_framework.permissions import BasePermission


class IsAdminRole(BasePermission):
    def has_permission(self, request, view):
        return request.user.is_authenticated and request.user.role == "ADMIN"


class IsTeacherRole(BasePermission):
    def has_permission(self, request, view):
        return request.user.is_authenticated and request.user.role == "TEACHER"


class IsParentRole(BasePermission):
    def has_permission(self, request, view):
        return request.user.is_authenticated and request.user.role == "PARENT"


class IsAdminOrTeacher(BasePermission):
    def has_permission(self, request, view):
        return request.user.is_authenticated and request.user.role in ["ADMIN", "TEACHER"]
