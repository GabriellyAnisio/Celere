from django.urls import path
from .views import *
from . import views

urlpatterns = [
    #URL Index
    path('', views.index, name='index'),

    path('turma/<int:pk>/', TurmaDetail.as_view(), name='turma-detail'),
    path('turma/', TurmaList.as_view(), name='turma-list'),
    path('aluno/<int:pk>/', AlunoDetail.as_view(), name='aluno-detail'),
    path('aluno/', AlunoList.as_view(), name='aluno-list'),

    #URLs de Profissional
    path('profissional/<int:pk>', ProfissionalDetail.as_view(), name='profissional-detail'),
    path('profissional/', ProfissionalList.as_view(), name='profissional-list'),
    path('profissional/deleteupdate', ProfissionalDeleteUpdate.as_view(), name='profissional-delete-update'),
    path('profissional/create', ProfissionalCreate.as_view(), name='profissional-create'),

    #URLs de Professor
    path('professor/<int:pk>', ProfessorDetail.as_view(), name='professor-detail'),
    path('professor/', ProfessorList.as_view(), name='professor-list'),
    path('professor/deleteupdate', ProfessorDeleteUpdate.as_view(), name='professor-delete-update'),
    path('professor/create', ProfessorCreate.as_view(), name='professor-create'),

    #URLs de Gestor
    path('gestor/<int:pk>', GestorDetail.as_view(), name='gestor-detail'),
    path('gestor/', GestorList.as_view(), name='gestor-list'),
    path('gestor/deleteupdate', GestorDeleteUpdate.as_view(), name='gestor-delete-update'),
    path('gestor/create', GestorCreate.as_view(), name='gestor-create'),

    #URLs de Nota
    path('nota/<int:pk>', NotaDetail.as_view(), name='nota-detail'),
    path('nota/', NotaList.as_view(), name='nota-list'),
    path('nota/deleteupdate', NotaDeleteUpdate.as_view(), name='nota-delete-update'),
    path('gestor/create', NotaCreate.as_view(), name='nota-create'),
]