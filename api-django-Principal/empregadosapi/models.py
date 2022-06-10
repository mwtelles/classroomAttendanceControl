from django.db import models

# Create your models here.

class Professor(models.Model):
   id = models.IntegerField
   nome = models.CharField(max_length=50)
   matricula = models.IntegerField(max_length=10)
   senha = models.CharField(max_length=8)

class Turma(models.Model):
   id = models.IntegerField
   disciplina = models.CharField(default=None,max_length=50)
   periodo = models.IntegerField(default=50)
   ano = models.IntegerField(default=0)
   semestre = models.IntegerField(default=0)

class Aluno(models.Model):
   matricula = models.IntegerField(default=None,max_length=10)
   nome = models.CharField(max_length=50,default=None)
   foto = models.ImageField(max_length=50 ,default=None)
