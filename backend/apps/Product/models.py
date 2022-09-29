from ctypes import c_ssize_t
from django.db import models

#Categories
APPS = 'apps'
TEMPLATES = 'templates'
COURSES  = 'courses'

CATEGORIES = [
    (APPS, 'Apps'),
    (TEMPLATES, 'Templates'),
    (COURSES, 'Courses'),
]

#Tools
FIGMA = 'Figma'
PHOTOSHOP = 'Photoshop'
ILLUSTRATOR = 'Illustrator'
INVISION = 'Invision'
FIGJAM = 'Figjam'
HTML = 'Html'
CSS = 'Css'
JS = 'Js'
SASS = 'Sass'
AXIOS = 'Axios'
REACT = 'React'
TAILWIND = 'Tailwind'
VITE = 'Vite'
NEXTJS = 'Nextjs'
TYPESCRIPT = 'Typescript'
DJANGO = 'Django'
TOOLS = [
    (FIGMA, 'Figma'),
    (PHOTOSHOP, 'Photoshop'),
    (ILLUSTRATOR, 'Illustrator'),
    (INVISION, 'Invision'),
    (FIGJAM, 'Figjam'),
    (HTML, 'Html'),
    (CSS, 'Css'),
    (JS, 'Js'),
    (SASS, 'Sass'),
    (AXIOS, 'Axios'),
    (REACT, 'React'),
    (TAILWIND, 'Tailwind'),
    (VITE, 'Vite'),
    (NEXTJS, 'Nextjs'),
    (TYPESCRIPT, 'Typescript'),
    (DJANGO, 'Django'),
]


class ProductToolsUsed(models.Model):
    id = models.AutoField(primary_key=True)
    image = models.ImageField(upload_to='', blank=True, null=True)
    tool = models.CharField(max_length=255, choices=TOOLS, default='')

    def __str__(self):
        return "{}".format(self.tool)

class ProductDetail(models.Model):
    short_desc = models.CharField(max_length=255)
    desc = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return "{}".format(self.pk)
        
class Product(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255)
    desc = models.CharField(max_length=255)
    image = models.ImageField(upload_to='')
    price = models.FloatField()
    discount = models.IntegerField(default=0)
    category = models.CharField(max_length=255, choices=CATEGORIES, default='')
    details_id = models.ForeignKey(
        ProductDetail, on_delete=models.CASCADE)
    tools = models.ManyToManyField(ProductToolsUsed)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return "{} - {}".format(self.id,
                                self.name)
