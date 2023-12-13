from django.urls import path
from .views import *

urlpatterns = [
    path('turma/<int:pk>/', TurmaDetail.as_view(), name='turma-detail'),
    path('turma/', TurmaList.as_view(), name='turma-list'),
    path('aluno/<int:pk>/', AlunoDetail.as_view(), name='aluno-detail'),
    path('aluno/', AlunoList.as_view(), name='aluno-list'),
]