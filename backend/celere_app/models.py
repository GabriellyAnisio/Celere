from django.db import models
from datetime import datetime
from django.utils import timezone

class SerieEscolar(models.Model):
    #ID

    CATEGORY = [
      ('bercario', 'Berçário'),
      ('g1', 'G1'),
      ('g2', 'G2'),
      ('g3', 'G3'),
      ('g4', 'G4'),
      ('g5', 'G5'),
      ('1ano', '1º ano'),
      ('2ano', '2º ano'),
      ('3ano', '3º ano'),
      ('4ano', '4º ano')
    ]
     
    school_grade = models.CharField(max_length=100, choices=CATEGORY)
    class Meta:
        db_table = 'SerieEscolar'
    def __str__(self):
        return self.school_grade

class NivelEnsino(models.Model):
    # ID
    CATEGORY = [
      ('ens_infantil', 'Ensino Infantil'),
      ('ens_fundamental1', 'Ensino Fundamental I'),
      ('ens_fundamental2', 'Ensino Fundamental II'),
      ('ens_medio', 'Ensino Médio'),
      ('ens_medio_tec', 'Ensino Médio Técnico'),
      ('eja', 'EJA')
   ]
    
    school_level = models.CharField(max_length=50, choices=CATEGORY)
    class Meta:
        db_table = 'NivelEnsino'
    def __str__(self):
        return self.level
    
class Turma(models.Model):
    #ID
    name = models.CharField('Nome', max_length=255)
    school_grade = models.ForeignKey(SerieEscolar, on_delete=models.CASCADE,
                              related_name='turmas_serie', null=True, blank=True)
    school_level = models.ForeignKey(NivelEnsino, on_delete=models.CASCADE,
                              related_name='turmas_nivel', null=False, blank=False)
    class Meta:
        db_table = 'Turma'
    def __str__(self):
        return self.name

class Aluno(models.Model):
    registration_number = models.IntegerField(primary_key=True)
    name = models.CharField('Nome', max_length=100)
    birth_date = models.DateTimeField('Data de nascimento')
    id_turma = models.ForeignKey(Turma, on_delete=models.CASCADE)

    class Meta:
        db_table = 'Aluno'
    def __str__(self):
        return self.name

class Bilhete(models.Model):
    #ID
    title = models.CharField('Título', max_length=150)
    text = models.CharField('Texto', max_length=500)
    creation_date = models.DateTimeField('Data de criação', default=timezone.now)
    reg_aluno = models.ForeignKey(Aluno, on_delete=models.CASCADE,
                              related_name='bilhetes_aluno', null=False, blank=False)

    class Meta:
        db_table = 'Bilhete'
    def __str__(self):
        return self.title

class Responsavel(models.Model):
    reg_aluno = models.ForeignKey(Aluno, on_delete=models.CASCADE,
                              related_name='responsaveis_aluno', null=False, blank=False)
    cpf = models.CharField('CPF', max_length=14)
    rg = models.CharField('RG', max_length=20)
    name = models.CharField('Nome', max_length=100)
    birth_date = models.DateTimeField('Data de criação', default=timezone.now)
    tel = models.CharField(max_length=20)
    email = models.CharField(max_length=100)
    kinship = models.CharField(max_length=15)
    class Meta:
        db_table = 'Responsavel'
    def __str__(self):
        return self.name

# class Nota(models.Model):
#     #ID
#     grade = models.DecimalField('Nota', max_digits=4, decimal_places=2, default=0)
#     date = models.DateTimeField('Data', default=timezone.now)

# class Frequencia(models.Model):

# class Disciplina(models.Model):
