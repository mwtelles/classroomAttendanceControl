# Generated by Django 4.0.5 on 2022-06-09 17:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('empregadosapi', '0002_professor_delete_empregado'),
    ]

    operations = [
        migrations.AlterField(
            model_name='professor',
            name='nome',
            field=models.CharField(max_length=50),
        ),
    ]