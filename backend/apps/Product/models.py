from django.db import models

APPS = 'apps'
TEMPLATES = 'templates'
COURSES  = 'courses'

CATEGORIES = [
    (APPS, 'Apps'),
    (TEMPLATES, 'Templates'),
    (COURSES, 'Courses'),
]

class Product(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255)
    desc = models.CharField(max_length=255)
    image = models.ImageField(upload_to='')
    price = models.FloatField()
    discount = models.IntegerField(default=0)
    category = models.CharField(max_length=255, choices=CATEGORIES, default='')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return "{} - {}".format(self.id,
                                self.name)
