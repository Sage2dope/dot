from django.urls import path
from . import views

urlpatterns = [
    path('contacts/', views.ContactListCreate.as_view(), name='contact-list'),
    path('contacts/delete/<int:pk>/', views.DeleteContact.as_view(), name='delete-contact'),
    path('contacts/update/<int:pk>/', views.UpdateContact.as_view(), name='update-contact'),
]