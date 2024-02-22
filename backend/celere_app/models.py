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
     
    school_grade = models.CharField('Série escolar', max_length=100, choices=CATEGORY)
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
    
    school_level = models.CharField('Nível de ensino', max_length=50, choices=CATEGORY)
    class Meta:
        db_table = 'NivelEnsino'
    def __str__(self):
        return self.school_level
    
class Turma(models.Model):
    #ID
    name = models.CharField('Nome da turma', max_length=255)
    school_grade = models.ForeignKey(SerieEscolar, on_delete=models.CASCADE,
                              related_name='turmas_serie', null=True, blank=True)
    school_level = models.ForeignKey(NivelEnsino, on_delete=models.CASCADE,
                              related_name='turmas_nivel', null=False, blank=False)
    class Meta:
        db_table = 'Turma'
    def __str__(self):
        return self.name

class Aluno(models.Model):
    registration_number = models.IntegerField('Número de matrícula', primary_key=True)
    name = models.CharField('Nome do aluno', max_length=100)
    birth_date = models.DateField('Data de nascimento')
    id_turma = models.ForeignKey(Turma, on_delete=models.CASCADE)

    class Meta:
        db_table = 'Aluno'
    def __str__(self):
        return self.name

class Profissional(models.Model):
    #ID
    name = models.CharField('Nome', max_length=100)
    email = models.CharField('E-mail', max_length=150)
    password = models.CharField('Senha', max_length=255)
    birth_date = models.DateField('Data de nascimento')
    tel = models.CharField('Telefone', max_length=20)
    rg = models.CharField('RG', max_length=20)

    class Meta:
        db_table = 'Profissional'

    def __str__(self):
        return self.name
    
class Bilhete(models.Model):
    #ID
    title = models.CharField('Título', max_length=150)
    text = models.TextField('Texto', max_length=500)
    creation_date = models.DateTimeField('Data de criação', default=timezone.now)
    reg_aluno = models.ForeignKey(Aluno, on_delete=models.CASCADE,
                              related_name='bilhetes_aluno', null=False, blank=False)
    reg_prof = models.ForeignKey(Profissional, on_delete=models.CASCADE,
                              related_name='bilhetes_prof', null=True, blank=False)
    class Meta:
        db_table = 'Bilhete'
    def __str__(self):
        return self.title

class Responsavel(models.Model):
    reg_aluno = models.ForeignKey(Aluno, on_delete=models.CASCADE,
                              related_name='responsaveis_aluno', null=False, blank=False)
    cpf = models.CharField('CPF', max_length=14)
    rg = models.CharField('RG', max_length=20)
    name = models.CharField('Nome do responsável', max_length=100)
    birth_date = models.DateField('Data de nascimento')
    tel = models.CharField('Telefone', max_length=20)
    email = models.CharField('E-mail',max_length=100)
    kinship = models.CharField('Parentesco', max_length=15)
    class Meta:
        db_table = 'Responsavel'
    def __str__(self):
        return self.name

class Disciplina(models.Model):
    code = models.CharField('Código', primary_key=True, max_length=10)
    name = models.CharField('Nome da disciplina', max_length=100)
    class Meta:
        db_table = 'Disciplina'
    def __str__(self):
        return self.name
    
class Disc_Turma(models.Model):
    code_disciplina = models.ForeignKey(Disciplina, on_delete=models.CASCADE, related_name='disc_turma_disciplina',
                                        null=False, blank=False)
    id_turma = models.ForeignKey(Turma, on_delete=models.CASCADE, related_name='disc_turma_turma',
                                        null=False, blank=False)
    class Meta:
        db_table = 'Disc_Turma'
        unique_together = [['code_disciplina', 'id_turma']]

    def __str__(self):
        return f'{self.code_disciplina} - {self.id_turma.name}'
    
class Nota(models.Model):

    CATEGORY_AVAL = [
      ('Tl', '1ª Avaliação'),
      ('T2', '2ª Avaliação'),
      ('T3', '3º Avaliação'),
      ('T4', 'Final')
   ]
    # ID
    category = models.CharField('Categoria', max_length=2, choices=CATEGORY_AVAL)
    date = models.DateTimeField('Data', default=timezone.now)
    grade = models.FloatField('Nota', default=0)
    disciplina_fk = models.ForeignKey(Disciplina, on_delete=models.CASCADE,
                              related_name='notas_disciplina', null=False, blank=False)
    aluno_fk = models.ForeignKey(Aluno, on_delete=models.CASCADE,
                              related_name='notas_aluno', null=False, blank=False)
    year = models.IntegerField()  

    class Meta:
        db_table = 'Nota'
        unique_together = [['category', 'year']]  # Define a restrição única composta

    def save(self, *args, **kwargs):
        if self.date:
            self.year = self.date.year  # Extrai o ano da data
        super().save(*args, **kwargs)

    def __str__(self):
        return str(self.grade)

class Frequencia(models.Model):
    #ID
    disciplina_fk = models.ForeignKey(Disciplina, on_delete=models.CASCADE, 
                                      related_name='frequencias_disciplina', null=False, blank=False)
    date = models.DateTimeField('Data', default=timezone.now)

    FREQUENCIA_CHOICES = [
        ('P', 'Presente'),
        ('NP', 'Não Presente')
    ]

    frequency = models.CharField('Frequência', max_length=2, choices=FREQUENCIA_CHOICES)    
    id_aluno = models.ForeignKey(Aluno, on_delete=models.CASCADE, 
                                 related_name='frequencias_aluno', null=False, blank=False)

    class Meta:
        db_table = 'Frequencia'

    def __str__(self):
        return self.frequency


class Professor(models.Model):
    id_profissional = models.ForeignKey(Profissional, on_delete=models.CASCADE, related_name='professor_profissional', 
                                        null=False, blank=False)
    cpf = models.CharField('CPF', max_length=14, primary_key=True)

    class Meta:
        db_table = 'Professor'

    def __str__(self):
        return self.id_profissional.name if self.id_profissional else "Professor sem nome"

class Gestor(models.Model):
    id_profissional = models.ForeignKey(Profissional, on_delete=models.CASCADE, related_name='gestor_profissional', 
                                        null=False, blank=False)
    cpf = models.CharField('CPF', max_length=14, primary_key=True)

    class Gestor:
        db_table = 'Gestor'

    def __str__(self):
        return self.id_profissional.name 

class Leciona(models.Model):
    cpf_professor = models.ForeignKey(Professor, on_delete=models.CASCADE, related_name='leciona_professor', 
                                        null=False, blank=False)
    code_disciplina = models.ForeignKey(Disciplina, on_delete=models.CASCADE, related_name='leciona_disciplina', 
                                        null=False, blank=False)
    class Leciona:
        db_table = 'Leciona'

    def __str__(self):
        return f"{self.cpf_professor} - {self.code_disciplina}"

class Comunicado(models.Model):
    #ID
    TAGS = [
        ('Urg', 'Urgente'),
        ('Imp', 'Importante'),
        ('Norm', 'Normal'),
        ('Baixa', 'Baixa prioridade')
    ]

    author = models.ForeignKey(Profissional, on_delete=models.CASCADE, related_name='autor_comunicado', 
                               null=False, blank=False)
    reader = models.ManyToManyField(Profissional, related_name='leitores_comunicado', null=False, blank=False)
    title = models.CharField('Título', max_length=150)
    text = models.TextField('Texto', max_length=500)
    creation_date = models.DateTimeField('Data de criação', default=timezone.now)
    end_date = models.DateTimeField('Data de término')
    tags = models.CharField('Tags', choices=TAGS, max_length=20)

    class Meta:
        db_table = 'Comunicado'
    def __str__(self):
        return self.title

class ChecklistItem(models.Model):
    item = models.CharField(max_length=100)

    class Meta:
        db_table = 'ChecklistItem'
    def __str__(self):
        return self.item
    
class Planejamento(models.Model):

    TAGS = [
        ('Urg', 'Urgente'),
        ('Imp', 'Importante'),
        ('Norm', 'Normal'),
        ('Baixa', 'Baixa prioridade')
    ]

    #ID
    id_profissional = models.ForeignKey(Profissional, on_delete=models.CASCADE, related_name='planejamentos_profissional',
                                        null=False, blank=False)
    title = models.CharField('Título', max_length=150)
    text = models.CharField('Texto', max_length=500)
    creation_date = models.DateTimeField('Data de criação', default=timezone.now)
    end_date = models.DateTimeField('Data de término')
    tags = models.CharField('Tags', choices=TAGS, max_length=20)
    checklist = models.ManyToManyField(ChecklistItem, blank=True)

    class Meta:
        db_table = 'Planejamento'
    def __str__(self):
        return self.title