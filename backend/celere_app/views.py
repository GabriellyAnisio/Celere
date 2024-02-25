from django.shortcuts import render

from rest_framework import generics, viewsets, status
from .models import *
from .serializers import *
from django.http import HttpResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view, APIView
from django.core.exceptions import ObjectDoesNotExist

#Index
def index(request):
    return HttpResponse("Hello, world. You're at the index.")

@api_view(['GET'])
def alunos_da_turma(request, turma_id):
    turma = Turma.objects.get(id=turma_id)
    alunos = Aluno.objects.filter(id_turma=turma)
    
    alunos_data = []
    for aluno in alunos:
        aluno_data = {
            'registration_number': aluno.registration_number,
            'name': aluno.name,
            'birth_date': aluno.birth_date,
        }
        alunos_data.append(aluno_data)
    
    return Response(alunos_data)


#Views de Profissional

# class ProfissionalCreate(generics.CreateAPIView):
#     queryset = Profissional.objects.all()
#     serializer_class = ProfissionalSerializer

@api_view(['POST'])
def create_professor(request):
    data = request.data

    try:
        profissional = Profissional.objects.create(
            name=data['name'],
            email=data['email'],
            password=data['password'],
            birth_date=data['birth_date'],
            tel=data['tel'],
            rg=data['rg']
        )

        professor = Professor.objects.create(
            id_profissional=profissional,
            cpf=data['cpf']
        )

        return Response({'message': 'Professor cadastrado com sucesso'}, status=status.HTTP_201_CREATED)
    except Exception as e:
        return Response({'message': str(e)}, status=status.HTTP_400_BAD_REQUEST)
    
@api_view(['POST'])
def create_gestor(request):
    data = request.data

    try:
        profissional = Profissional.objects.create(
            name=data['name'],
            email=data['email'],
            password=data['password'],
            birth_date=data['birth_date'],
            tel=data['tel'],
            rg=data['rg']
        )

        gestor = Gestor.objects.create(
            id_profissional=profissional,
            cpf=data['cpf']
        )

        return Response({'message': 'Gestor cadastrado com sucesso'}, status=status.HTTP_201_CREATED)
    except Exception as e:
        return Response({'message': str(e)}, status=status.HTTP_400_BAD_REQUEST)

class ProfissionalDeleteUpdate(generics.RetrieveUpdateDestroyAPIView):
    queryset = Profissional.objects.all()
    serializer_class = ProfissionalSerializer

class ProfissionalList(generics.ListAPIView):
    queryset = Profissional.objects.all()
    serializer_class = ProfissionalSerializer
    
class ProfissionalDetail(generics.RetrieveAPIView):
    queryset = Profissional.objects.all()
    serializer_class = ProfissionalSerializer


#Views de Professor
class ProfessorDeleteUpdate(generics.RetrieveUpdateDestroyAPIView):
    queryset = Professor.objects.all()
    serializer_class = ProfessorSerializer

class ProfessorList(generics.ListAPIView):
    queryset = Professor.objects.all()
    serializer_class = ProfessorSerializer

class ProfessorDetail(generics.RetrieveAPIView):
    queryset = Professor.objects.all()
    serializer_class = ProfessorSerializer

@api_view(['GET'])
def ProfessorDetailView(request, pk):
    professor_info = Profissional.objects.filter(id=pk).first()
    professor = Professor.objects.filter(id_profissional_id=pk).first()

    if not professor_info:
        return Response({'message': 'Professor não encontrado'}, status=404)

    professor_discs = Leciona.objects.filter(cpf_professor=professor.cpf)
    
    disciplinas_info = []
    for professor_disc in professor_discs:
        turmas = Disc_Turma.objects.filter(code_disciplina=professor_disc.code_disciplina)
        turmas_info = [{'id_turma': turma.id_turma.id, 'name': turma.id_turma.name} for turma in turmas]

        disciplina_info = {
            'code': professor_disc.code_disciplina.code,
            'name': professor_disc.code_disciplina.name,
            'turmas': turmas_info,
        }
        disciplinas_info.append(disciplina_info)

    bilhetes = Bilhete.objects.filter(reg_prof=professor.id_profissional_id)
    bilhetes_info = [{'title': bilhete.title, 'text': bilhete.text, 'creation_date': bilhete.creation_date} for bilhete in bilhetes]

    comunicados = Comunicado.objects.filter(author=professor.id_profissional_id)
    comunicados_info = [{'title': comunicado.title, 'text': comunicado.text, 'creation_date': comunicado.creation_date, 'end_date': comunicado.end_date, 'tags': comunicado.tags, 'is_author': True} for comunicado in comunicados]

    comunicados_recebidos = Comunicado.objects.filter(reader=professor.id_profissional_id)
    comunicados_recebidos_info = [{'title': comunicado.title, 'text': comunicado.text, 'creation_date': comunicado.creation_date, 'end_date': comunicado.end_date, 'tags': comunicado.tags, 'is_author': False} for comunicado in comunicados_recebidos]

    professor_info = {
        'id': professor_info.id,
        'name': professor_info.name,
        'email': professor_info.email,
        'birth_date': professor_info.birth_date,
        'tel': professor_info.tel,
        'rg': professor_info.rg,
        'disciplinas': disciplinas_info,
        'bilhetes': bilhetes_info,
        'comunicados': comunicados_info + comunicados_recebidos_info,
    }

    return Response(professor_info)

@api_view(['GET'])
def ProfessorDetailViewList(request):
    professores_ = Professor.objects.all()

    professores_info = []
    for professor in professores_:
        professor_discs = Leciona.objects.filter(cpf_professor=professor.cpf)
        disciplinas_info = []
        for professor_disc in professor_discs:
            turmas = Disc_Turma.objects.filter(code_disciplina=professor_disc.code_disciplina)
            turmas_info = [{'id_turma': turma.id_turma.id, 'name': turma.id_turma.name} for turma in turmas]

            disciplina_info = {
                'code': professor_disc.code_disciplina.code,
                'name': professor_disc.code_disciplina.name,
                'turmas': turmas_info,
            }
            disciplinas_info.append(disciplina_info)

        bilhetes = Bilhete.objects.filter(reg_prof=professor.id_profissional_id)
        bilhetes_info = [{'title': bilhete.title, 'text': bilhete.text, 'creation_date': bilhete.creation_date} for bilhete in bilhetes]

        comunicados = Comunicado.objects.filter(author=professor.id_profissional_id)
        comunicados_info = [{'title': comunicado.title, 'text': comunicado.text, 'creation_date': comunicado.creation_date, 'end_date': comunicado.end_date, 'tags': comunicado.tags, 'is_author': True} for comunicado in comunicados]

        comunicados_recebidos = Comunicado.objects.filter(reader=professor.id_profissional_id)
        comunicados_recebidos_info = [{'title': comunicado.title, 'text': comunicado.text, 'creation_date': comunicado.creation_date, 'end_date': comunicado.end_date, 'tags': comunicado.tags, 'is_author': False} for comunicado in comunicados_recebidos]

        professor_prof = Profissional.objects.filter(id=professor.id_profissional_id).first()

        professor_info = {
            'id': professor_prof.id,
            'name': professor_prof.name,
            'email': professor_prof.email,
            'birth_date': professor_prof.birth_date,
            'tel': professor_prof.tel,
            'rg': professor_prof.rg,
            'disciplinas': disciplinas_info,
            'bilhetes': bilhetes_info,
            'comunicados': comunicados_info + comunicados_recebidos_info,
        }

        professores_info.append(professor_info)

    return Response(professores_info)

#Views Gestor

class GestorDeleteUpdate(generics.RetrieveUpdateDestroyAPIView):
    queryset = Gestor.objects.all()
    serializer_class = GestorSerializer

class GestorList(generics.ListAPIView):
    queryset = Gestor.objects.all()
    serializer_class = GestorSerializer

class GestorDetail(generics.RetrieveAPIView):
    queryset = Gestor.objects.all()
    serializer_class = GestorSerializer

@api_view(['GET'])
def GestorDetailView(request, pk):
    try:
        gestor_ = Gestor.objects.get(id_profissional=pk)
    except Gestor.DoesNotExist:
        return Response({'message': 'Gestor não encontrado'}, status=status.HTTP_404_NOT_FOUND)

    bilhetes = Bilhete.objects.filter(reg_prof=gestor_.id_profissional)
    bilhetes_info = [{'title': bilhete.title, 'text': bilhete.text, 'creation_date': bilhete.creation_date} for bilhete in bilhetes]

    comunicados = Comunicado.objects.filter(author=gestor_.id_profissional)
    comunicados_info = [{'title': comunicado.title, 'text': comunicado.text, 'creation_date': comunicado.creation_date, 'end_date': comunicado.end_date, 'tags': comunicado.tags, 'is_author': True} for comunicado in comunicados]

    comunicados_recebidos = Comunicado.objects.filter(reader=gestor_.id_profissional)
    comunicados_recebidos_info = [{'title': comunicado.title, 'text': comunicado.text, 'creation_date': comunicado.creation_date, 'end_date': comunicado.end_date, 'tags': comunicado.tags, 'is_author': False} for comunicado in comunicados_recebidos]

    gestor_info = {
        'id_profissional': gestor_.id_profissional.id,
        'name': gestor_.id_profissional.name,
        'email': gestor_.id_profissional.email,
        'birth_date': gestor_.id_profissional.birth_date,
        'tel': gestor_.id_profissional.tel,
        'rg': gestor_.id_profissional.rg,
        'bilhetes': bilhetes_info,
        'comunicados': comunicados_info + comunicados_recebidos_info,
    }

    return Response(gestor_info)

@api_view(['GET'])
def GestorDetailViewList(request):
    gestores_ = Gestor.objects.all()

    gestores_info = []
    for gestor_ in gestores_:
        bilhetes = Bilhete.objects.filter(reg_prof=gestor_.id_profissional)
        bilhetes_info = [{'title': bilhete.title, 'text': bilhete.text, 'creation_date': bilhete.creation_date} for bilhete in bilhetes]

        comunicados = Comunicado.objects.filter(author=gestor_.id_profissional)
        comunicados_info = [{'title': comunicado.title, 'text': comunicado.text, 'creation_date': comunicado.creation_date, 'end_date': comunicado.end_date, 'tags': comunicado.tags, 'is_author': True} for comunicado in comunicados]

        comunicados_recebidos = Comunicado.objects.filter(reader=gestor_.id_profissional)
        comunicados_recebidos_info = [{'title': comunicado.title, 'text': comunicado.text, 'creation_date': comunicado.creation_date, 'end_date': comunicado.end_date, 'tags': comunicado.tags, 'is_author': False} for comunicado in comunicados_recebidos]

        gestor_info = {
            'id_profissional': gestor_.id_profissional.id,
            'name': gestor_.id_profissional.name,
            'email': gestor_.id_profissional.email,
            'birth_date': gestor_.id_profissional.birth_date,
            'tel': gestor_.id_profissional.tel,
            'rg': gestor_.id_profissional.rg,
            'bilhetes': bilhetes_info,
            'comunicados': comunicados_info + comunicados_recebidos_info,
        }

        gestores_info.append(gestor_info)

    return Response(gestores_info)

#Views de Nota
class NotaCreate(generics.CreateAPIView):
    queryset = Nota.objects.all()
    serializer_class = NotaSerializer

class NotaDeleteUpdate(generics.RetrieveUpdateDestroyAPIView):
    queryset = Nota.objects.all()
    serializer_class = NotaSerializer

class NotaList(generics.ListAPIView):
    queryset = Nota.objects.all()
    serializer_class = NotaSerializer

class NotaDetail(generics.RetrieveAPIView):
    queryset = Nota.objects.all()
    serializer_class = NotaSerializer

# Views de Disc_Turma
class Disc_TurmaCreate(generics.CreateAPIView):
    queryset = Disc_Turma.objects.all()
    serializer_class = Disc_TurmaSerializer

class Disc_TurmaDeleteUpdate(generics.RetrieveUpdateDestroyAPIView):
    queryset = Disc_Turma.objects.all()
    serializer_class = Disc_TurmaSerializer

class Disc_TurmaList(generics.ListAPIView):
    queryset = Disc_Turma.objects.all()
    serializer_class = Disc_TurmaSerializer

class Disc_TurmaDetail(generics.RetrieveAPIView):
    queryset = Disc_Turma.objects.all()
    serializer_class = Disc_TurmaSerializer

# Views de Turma
class TurmaCreate(generics.CreateAPIView):
    queryset = Turma.objects.all()
    serializer_class = TurmaSerializer

# @api_view(['POST'])
# def create_turma(request):
#     data = request.data

#     try:
#         # Criar a turma
#         turma = Turma.objects.create(
#             name=data.get('name'),
#             school_grade_id=data.get('serie_escolar_id'),
#             school_level_id=data.get('nivel_ensino_id')
#         )

#         # Adicionar as disciplinas e professores associados à turma
#         disciplinas_codes = data.get('disciplinas', [])
#         for disciplina_code in disciplinas_codes:
#             disciplina = Disciplina.objects.get(code=disciplina_code)
#             professor_id = data.get('professor_id')
#             professor = Professor.objects.get(id_profissional_id=professor_id)
#             leciona = Leciona.objects.create(
#                 cpf_professor=professor,
#                 code_disciplina=disciplina
#             )

#         return Response({'message': 'Turma cadastrada com sucesso'}, status=status.HTTP_201_CREATED)
#     except Exception as e:
#         return Response({'message': str(e)}, status=status.HTTP_400_BAD_REQUEST)

class TurmaDeleteUpdate(generics.RetrieveUpdateDestroyAPIView):
    queryset = Turma.objects.all()
    serializer_class = TurmaSerializer

class TurmaList(generics.ListAPIView):
    queryset = Turma.objects.all()
    serializer_class = TurmaSerializer

class TurmaDetail(generics.RetrieveAPIView):
    queryset = Turma.objects.all()
    serializer_class = TurmaSerializer

@api_view(['GET'])
def TurmaDetailView(request, pk):
    try:
        turma = Turma.objects.get(id=pk)
    except ObjectDoesNotExist:
        return Response({'message': 'Turma não encontrada'}, status=404)

    alunos = Aluno.objects.filter(id_turma=pk)
    alunos_info = [{'registration_number': aluno.registration_number, 'name': aluno.name, 'birth_date': aluno.birth_date} for aluno in alunos]

    disciplinas_turma = Disc_Turma.objects.filter(id_turma=pk)
    disciplinas_info = [{'code': disciplina.code_disciplina.code, 'name': disciplina.code_disciplina.name} for disciplina in disciplinas_turma]

    professores = []
    for disciplina_turma in disciplinas_turma:
        leciona = Leciona.objects.filter(code_disciplina=disciplina_turma.code_disciplina_id)
        for professor in leciona:
            professores.append({
                'cpf': professor.cpf_professor.cpf,
                'name': professor.cpf_professor.id_profissional.name
            })

    turma_info = {
        'id': turma.id,
        'name': turma.name,
        'school_grade': turma.school_grade.school_grade if turma.school_grade else None,
        'school_level': turma.school_level.school_level,
        'alunos': alunos_info,
        'disciplinas': disciplinas_info,
        'professores': professores
    }

    return Response(turma_info)

@api_view(['GET'])
def TurmaDetailViewList(request):
    turmas = Turma.objects.all()
    turmas_info = []

    for turma in turmas:
        alunos = Aluno.objects.filter(id_turma=turma.id)
        alunos_info = [{'registration_number': aluno.registration_number, 'name': aluno.name, 'birth_date': aluno.birth_date} for aluno in alunos]

        disciplinas_turma = Disc_Turma.objects.filter(id_turma=turma.id)
        disciplinas_info = [{'code': disciplina.code_disciplina.code, 'name': disciplina.code_disciplina.name} for disciplina in disciplinas_turma]

        professores = []
        for disciplina_turma in disciplinas_turma:
            leciona = Leciona.objects.filter(code_disciplina=disciplina_turma.code_disciplina_id)
            for professor in leciona:
                professores.append({
                    'cpf': professor.cpf_professor.cpf,
                    'name': professor.cpf_professor.id_profissional.name
                })

        turma_info = {
            'id': turma.id,
            'name': turma.name,
            'school_grade': turma.school_grade.school_grade if turma.school_grade else None,
            'school_level': turma.school_level.school_level,
            'alunos': alunos_info,
            'disciplinas': disciplinas_info,
            'professores': professores
        }

        turmas_info.append(turma_info)

    return Response(turmas_info)

# Views de SerieEscolar
class SerieEscolarCreate(generics.CreateAPIView):
    queryset = SerieEscolar.objects.all()
    serializer_class = SerieEscolarSerializer

class SerieEscolarDeleteUpdate(generics.RetrieveUpdateDestroyAPIView):
    queryset = SerieEscolar.objects.all()
    serializer_class = SerieEscolarSerializer

class SerieEscolarList(generics.ListAPIView):
    queryset = SerieEscolar.objects.all()
    serializer_class = SerieEscolarSerializer

class SerieEscolarDetail(generics.RetrieveAPIView):
    queryset = SerieEscolar.objects.all()
    serializer_class = SerieEscolarSerializer

# Views de NivelEnsino
class NivelEnsinoCreate(generics.CreateAPIView):
    queryset = NivelEnsino.objects.all()
    serializer_class = NivelEnsinoSerializer

class NivelEnsinoDeleteUpdate(generics.RetrieveUpdateDestroyAPIView):
    queryset = NivelEnsino.objects.all()
    serializer_class = NivelEnsinoSerializer

class NivelEnsinoList(generics.ListAPIView):
    queryset = NivelEnsino.objects.all()
    serializer_class = NivelEnsinoSerializer

class NivelEnsinoDetail(generics.RetrieveAPIView):
    queryset = NivelEnsino.objects.all()
    serializer_class = NivelEnsinoSerializer

# Views de Frequencia
class FrequenciaCreate(generics.CreateAPIView):
    queryset = Frequencia.objects.all()
    serializer_class = FrequenciaSerializer

class FrequenciaDeleteUpdate(generics.RetrieveUpdateDestroyAPIView):
    queryset = Frequencia.objects.all()
    serializer_class = FrequenciaSerializer

class FrequenciaList(generics.ListAPIView):
    queryset = Frequencia.objects.all()
    serializer_class = FrequenciaSerializer

class FrequenciaDetail(generics.RetrieveAPIView):
    queryset = Frequencia.objects.all()
    serializer_class = FrequenciaSerializer

# Views de Aluno
class AlunoCreate(generics.CreateAPIView):
    queryset = Aluno.objects.all()
    serializer_class = AlunoSerializer

class AlunoDeleteUpdate(generics.RetrieveUpdateDestroyAPIView):
    queryset = Aluno.objects.all()
    serializer_class = AlunoSerializer

class AlunoList(generics.ListAPIView):
    queryset = Aluno.objects.all()
    serializer_class = AlunoSerializer

    def list(self, request):
        req = self.request
        turma = req.query_params.get('turma', None)
        queryset = Aluno.objects.all()

        if turma:
            queryset = Aluno.objects.filter(id_turma = turma)

        serializer = AlunoSerializer(queryset, many = True)
        return Response(serializer.data)

class AlunoDetail(generics.RetrieveAPIView):
    queryset = Aluno.objects.all()
    serializer_class = AlunoSerializer

@api_view(['GET'])
def AlunoDetailView(request, registration_number):
    aluno = Aluno.objects.filter(registration_number=registration_number).first()

    if not aluno:
        return Response({'message': 'Aluno não encontrado'}, status=404)

    turma = aluno.id_turma
    turma_info = {
        'id': turma.id,
        'name': turma.name,
        'school_grade': turma.school_grade.school_grade if turma.school_grade else None,
        'school_level': turma.school_level.school_level,
    }

    bilhetes = Bilhete.objects.filter(reg_aluno=aluno)
    bilhetes_info = [{'title': bilhete.title, 'text': bilhete.text, 'creation_date': bilhete.creation_date} for bilhete in bilhetes]

    responsaveis = Responsavel.objects.filter(reg_aluno=aluno)
    responsaveis_info = [{'cpf': responsavel.cpf, 'rg': responsavel.rg, 'name': responsavel.name, 'birth_date': responsavel.birth_date, 'tel': responsavel.tel, 'email': responsavel.email, 'kinship': responsavel.kinship} for responsavel in responsaveis]

    notas = Nota.objects.filter(aluno_fk=aluno)
    notas_info = [{'category': nota.category, 'date': nota.date, 'grade': nota.grade} for nota in notas]

    frequencias = Frequencia.objects.filter(id_aluno=aluno)
    frequencias_info = [{'disciplina_fk': frequencia.disciplina_fk.code, 'date': frequencia.date, 'frequency': frequencia.frequency} for frequencia in frequencias]

    aluno_info = {
        'registration_number': aluno.registration_number,
        'name': aluno.name,
        'birth_date': aluno.birth_date,
        'turma': turma_info,
        'bilhetes': bilhetes_info,
        'responsaveis': responsaveis_info,
        'notas': notas_info,
        'frequencias': frequencias_info,
    }

    return Response(aluno_info)

@api_view(['GET'])
def AlunoDetailViewList(request):
    alunos = Aluno.objects.all()

    alunos_info = []
    for aluno in alunos:
        turma = aluno.id_turma
        turma_info = {
            'id': turma.id,
            'name': turma.name,
            'school_grade': turma.school_grade.school_grade if turma.school_grade else None,
            'school_level': turma.school_level.school_level,
        }

        bilhetes = Bilhete.objects.filter(reg_aluno=aluno)
        bilhetes_info = [{'title': bilhete.title, 'text': bilhete.text, 'creation_date': bilhete.creation_date} for bilhete in bilhetes]

        responsaveis = Responsavel.objects.filter(reg_aluno=aluno)
        responsaveis_info = [{'cpf': responsavel.cpf, 'rg': responsavel.rg, 'name': responsavel.name, 'birth_date': responsavel.birth_date, 'tel': responsavel.tel, 'email': responsavel.email, 'kinship': responsavel.kinship} for responsavel in responsaveis]

        notas = Nota.objects.filter(aluno_fk=aluno)
        notas_info = [{'category': nota.category, 'date': nota.date, 'grade': nota.grade} for nota in notas]

        frequencias = Frequencia.objects.filter(id_aluno=aluno)
        frequencias_info = [{'disciplina_fk': frequencia.disciplina_fk.code, 'date': frequencia.date, 'frequency': frequencia.frequency} for frequencia in frequencias]

        aluno_info = {
            'registration_number': aluno.registration_number,
            'name': aluno.name,
            'birth_date': aluno.birth_date,
            'turma': turma_info,
            'bilhetes': bilhetes_info,
            'responsaveis': responsaveis_info,
            'notas': notas_info,
            'frequencias': frequencias_info,
        }
        alunos_info.append(aluno_info)

    return Response(alunos_info)

# Views de Bilhete
class BilheteCreate(generics.CreateAPIView):
    queryset = Bilhete.objects.all()
    serializer_class = BilheteSerializer

class BilheteDeleteUpdate(generics.RetrieveUpdateDestroyAPIView):
    queryset = Bilhete.objects.all()
    serializer_class = BilheteSerializer

class BilheteList(generics.ListAPIView):
    queryset = Bilhete.objects.all()
    serializer_class = BilheteSerializer

class BilheteDetail(generics.RetrieveAPIView):
    queryset = Bilhete.objects.all()
    serializer_class = BilheteSerializer

# Views de Responsavel
class ResponsavelCreate(generics.CreateAPIView):
    queryset = Responsavel.objects.all()
    serializer_class = ResponsavelSerializer

class ResponsavelDeleteUpdate(generics.RetrieveUpdateDestroyAPIView):
    queryset = Responsavel.objects.all()
    serializer_class = ResponsavelSerializer

class ResponsavelList(generics.ListAPIView):
    queryset = Responsavel.objects.all()
    serializer_class = ResponsavelSerializer

class ResponsavelDetail(generics.RetrieveAPIView):
    queryset = Responsavel.objects.all()
    serializer_class = ResponsavelSerializer

# Views de ChecklistItem
class ChecklistItemCreate(generics.CreateAPIView):
    queryset = ChecklistItem.objects.all()
    serializer_class = ChecklistItemSerializer

class ChecklistItemDeleteUpdate(generics.RetrieveUpdateDestroyAPIView):
    queryset = ChecklistItem.objects.all()
    serializer_class = ChecklistItemSerializer

class ChecklistItemlList(generics.ListAPIView):
    queryset = ChecklistItem.objects.all()
    serializer_class = ChecklistItemSerializer

class ChecklistItemDetail(generics.RetrieveAPIView):
    queryset = ChecklistItem.objects.all()
    serializer_class = ChecklistItemSerializer


#Views de Comunicado
class ComunicadoCreate(generics.CreateAPIView):
    queryset = Comunicado.objects.all()
    serializer_class = ComunicadoSerializer

class ComunicadoDeleteUpdate(generics.RetrieveUpdateDestroyAPIView):
    queryset = Comunicado.objects.all()
    serializer_class = ComunicadoSerializer

class ComunicadoList(generics.ListAPIView):
    queryset = Comunicado.objects.all()
    serializer_class = ComunicadoSerializer

    def list(self, request):
        req = self.request
        tag = req.query_params.get('tag', None)
        queryset = Comunicado.objects.all()

        if tag:
            queryset = Comunicado.objects.filter(tags = tag)

        serializer = ComunicadoSerializer(queryset, many = True)
        return Response(serializer.data)

class ComunicadoDetail(generics.RetrieveAPIView):
    queryset = Comunicado.objects.all()
    serializer_class = ComunicadoSerializer

#Views da Disciplina
class DisciplinaCreate(generics.CreateAPIView):
    queryset = Disciplina.objects.all()
    serializer_class = DisciplinaSerializer

class DisciplinaDeleteUpdate(generics.RetrieveUpdateDestroyAPIView):
    queryset = Disciplina.objects.all()
    serializer_class = DisciplinaSerializer

class DisciplinaList(generics.ListAPIView):
    queryset = Disciplina.objects.all()
    serializer_class = DisciplinaSerializer

class DisciplinaDetail(generics.RetrieveAPIView):
    queryset = Disciplina.objects.all()
    serializer_class = DisciplinaSerializer

#Views de Planejamento
class PlanejamentoCreate(generics.CreateAPIView):
    queryset = Planejamento.objects.all()
    serializer_class = PlanejamentoSerializer
    
class PlanejamentoDeleteUpdate(generics.RetrieveUpdateDestroyAPIView):
    queryset = Planejamento.objects.all()
    serializer_class = PlanejamentoSerializer

class PlanejamentoList(generics.ListAPIView):
    queryset = Planejamento.objects.all()
    serializer_class = PlanejamentoSerializer
    
class PlanejamentoDetail(generics.RetrieveAPIView):
    queryset = Planejamento.objects.all()
    serializer_class = PlanejamentoSerializer

#Views de Leciona
class LecionaCreate(generics.CreateAPIView):
    queryset = Leciona.objects.all()
    serializer_class = LecionaSerializer
    
class LecionaDeleteUpdate(generics.RetrieveUpdateDestroyAPIView):
    queryset = Leciona.objects.all()
    serializer_class = LecionaSerializer

class LecionaList(generics.ListAPIView):
    queryset = Leciona.objects.all()
    serializer_class = LecionaSerializer
    
class LecionaDetail(generics.RetrieveAPIView):
    queryset = Leciona.objects.all()
    serializer_class = LecionaSerializer