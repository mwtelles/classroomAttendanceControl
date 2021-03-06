# Generated by Django 4.0.5 on 2022-06-09 23:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('empregadosapi', '0005_remove_turma_disciplina'),
    ]

    operations = [
        migrations.AddField(
            model_name='aluno',
            name='foto',
            field=models.CharField(default=None, max_length=50),
        ),
        migrations.AddField(
            model_name='aluno',
            name='nome',
            field=models.CharField(default=None, max_length=50),
        ),
        migrations.AddField(
            model_name='turma',
            name='ano',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='turma',
            name='disciplina',
            field=models.CharField(default=None, max_length=50),
        ),
        migrations.AddField(
            model_name='turma',
            name='periodo',
            field=models.IntegerField(default=50),
        ),
        migrations.AddField(
            model_name='turma',
            name='semestre',
            field=models.IntegerField(default=0),
        ),
    ]
