from django.urls import path
from .views import *
from . import views

urlpatterns = [
    #URL Index
    path('', views.index, name='index'),

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
<<<<<<< HEAD
<<<<<<< Updated upstream
    path('gestor/create', NotaCreate.as_view(), name='nota-create'),
=======
=======
>>>>>>> 636134651b06628f98013f09c9871bbcf4097eb5
    path('nota/create', NotaCreate.as_view(), name='nota-create'),

    #URLs de Disc_Turma
    path('disc_turma/<int:pk>', Disc_TurmaDetail.as_view(), name='disc-turma-detail'),
    path('disc_turma/', Disc_TurmaList.as_view(), name='disc-turma-list'),
    path('disc_turma/deleteupdate', Disc_TurmaDeleteUpdate.as_view(), name='disc-turma-delete-update'),
    path('disc_turma/create', Disc_TurmaCreate.as_view(), name='disc-turma-create'),

    #URLs de Turma
    path('turma/<int:pk>', TurmaDetail.as_view(), name='turma-detail'),
    path('turma/', TurmaList.as_view(), name='turma-list'),
    path('turma/deleteupdate',TurmaDeleteUpdate.as_view(), name='turma-delete-update'),
    path('turma/create', TurmaCreate.as_view(), name='turma-create'),

    #URLs de SerieEscolar
    path('serie_escolar/<int:pk>', SerieEscolarDetail.as_view(), name='serie-escolar-detail'),
    path('serie_escolar/', SerieEscolarList.as_view(), name='serie-escolar-list'),
    path('serie_escolar/deleteupdate',SerieEscolarDeleteUpdate.as_view(), name='serie-escolar-delete-update'),
    path('serie_escolar/create', SerieEscolarCreate.as_view(), name='serie-escolar-create'),

    #URLs de NivelEnsino
    path('nivel_ensino/<int:pk>', NivelEnsinoDetail.as_view(), name='nivel-ensino-detail'),
    path('nivel_ensino/', NivelEnsinoList.as_view(), name='nivel-ensino-list'),
    path('nivel_ensino/deleteupdate', NivelEnsinoDeleteUpdate.as_view(), name='nivel-ensino-delete-update'),
    path('nivel_ensino/create', NivelEnsinoCreate.as_view(), name='nivel-ensino-create'),

    #URLs de Frequencia
    path('frequencia/<int:pk>', FrequenciaDetail.as_view(), name='frequencia-detail'),
    path('frequencia/', FrequenciaList.as_view(), name='frequencia-list'),
    path('frequencia/deleteupdate', FrequenciaDeleteUpdate.as_view(), name='frequencia-delete-update'),
    path('frequencia/create', FrequenciaCreate.as_view(), name='frequencia-create'),

    #URLs de Aluno
    path('aluno/<int:pk>', AlunoDetail.as_view(), name='aluno-detail'),
    path('aluno/', AlunoList.as_view(), name='aluno-list'),
    path('aluno/deleteupdate', AlunoDeleteUpdate.as_view(), name='aluno-delete-update'),
    path('aluno/create', AlunoCreate.as_view(), name='aluno-create'),

    #URLs de Bilhete
    path('bilhete/<int:pk>', BilheteDetail.as_view(), name='bilhete-detail'),
    path('bilhete/', BilheteList.as_view(), name='bilhete-list'),
    path('bilhete/deleteupdate', BilheteDeleteUpdate.as_view(), name='bilhete-delete-update'),
    path('bilhete/create', BilheteCreate.as_view(), name='bilhete-create'),

    #URLs de Responsavel
    path('responsavel/<int:pk>', ResponsavelDetail.as_view(), name='responsavel-detail'),
    path('responsavel/', ResponsavelList.as_view(), name='responsavel-list'),
    path('responsavel/deleteupdate', ResponsavelDeleteUpdate.as_view(), name='responsavel-delete-update'),
    path('responsavel/create', ResponsavelCreate.as_view(), name='responsavel-create'),

<<<<<<< HEAD
    #URLs de ChecklistItem
=======
     #URLs de ChecklistItem
>>>>>>> 636134651b06628f98013f09c9871bbcf4097eb5
    path('checklistitem/<int:pk>', ChecklistItemDetail.as_view(), name='checklistitem-detail'),
    path('checklistitem/', ChecklistItemlList.as_view(), name='checklistitem-list'),
    path('checklistitem/deleteupdate', ChecklistItemDeleteUpdate.as_view(), name='checklistitem-delete-update'),
    path('checklistitem/create', ChecklistItemCreate.as_view(), name='checklistitem-create'),
<<<<<<< HEAD
>>>>>>> Stashed changes
=======

    #URLs de Comunicado
    path('comunicado/<int:pk>', ComunicadoDetail.as_view(), name='comunicado-detail'),
    path('comunicado/', ComunicadoList.as_view(), name='comunicado-list'),
    path('comunicado/deleteupdate', ComunicadoDeleteUpdate.as_view(), name='comunicado-delete-update'),
    path('comunicado/create', ComunicadoCreate.as_view(), name='comunicado-create'),

    #URLs de Disciplina
    path('disciplina/<int:pk>', DisciplinaDetail.as_view(), name='disciplina-detail'),
    path('disciplina/', DisciplinaList.as_view(), name='disciplina-list'),
    path('disciplina/deleteupdate', DisciplinaDeleteUpdate.as_view(), name='disciplina-delete-update'),
    path('disciplina/create', DisciplinaCreate.as_view(), name='disciplina-create'),

    #URLs de Planejamento
    path('planejamento/<int:pk>', PlanejamentoDetail.as_view(), name='planejamento-detail'),
    path('planejamento/', PlanejamentoList.as_view(), name='planejamento-list'),
    path('planejamento/deleteupdate', PlanejamentoDeleteUpdate.as_view(), name='planejamento-delete-update'),
    path('planejamento/create', PlanejamentoCreate.as_view(), name='planejamento-create'),

    #URLs de Leciona
    path('leciona/<int:pk>', LecionaDetail.as_view(), name='leciona-detail'),
    path('leciona/', LecionaList.as_view(), name='leciona-list'),
    path('leciona/deleteupdate', LecionaDeleteUpdate.as_view(), name='leciona-delete-update'),
    path('leciona/create', LecionaCreate.as_view(), name='leciona-create'),
>>>>>>> 636134651b06628f98013f09c9871bbcf4097eb5
]