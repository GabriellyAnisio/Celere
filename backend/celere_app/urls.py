from django.urls import path
from .views import *

urlpatterns = [
    path('turma/<int:pk>/', TurmaDetail.as_view(), name='turma-detail'),
    path('aluno/<int:pk>/', AlunoDetail.as_view(), name='aluno-detail'),
]