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
ADOBE_PHOTOSHOP = 'Adobe Photoshop'
ADOBE_ILLUSTRATOR = 'Adobe Illustrator'
INVISION = 'InVision'
HTML = 'HTML'
CSS = 'CSS'
JAVASCRIPT = 'JavaScript'
SASS = 'Sass'
REACT = 'React'
TAILWIND_CSS = 'Tailwind CSS'
VITE = 'Vite'
NEXTJS = 'NextJs'
TYPESCRIPT = 'TypeScript'
DJANGO = 'Django'
JWT = 'JWT'
POSTGRESQL = 'PostgreSQL'
TOOLS = [
    (FIGMA, 'Figma'),
    (ADOBE_PHOTOSHOP, 'Adobe Photoshop'),
    (ADOBE_ILLUSTRATOR, 'Adobe Illustrator'),
    (INVISION, 'InVision'),
    (HTML, 'HTML'),
    (CSS, 'CSS'),
    (JAVASCRIPT, 'JavaScript'),
    (SASS, 'Sass'),
    (REACT, 'React'),
    (TAILWIND_CSS, 'Tailwind CSS'),
    (VITE, 'Vite'),
    (NEXTJS, 'NextJs'),
    (TYPESCRIPT, 'TypeScript'),
    (DJANGO, 'Django'),
    (JWT, 'JWT'),
    (POSTGRESQL, 'PostgreSQL'),
]

class ProductToolsUsed(models.Model):
    image = models.ImageField(upload_to='')
    tool = models.CharField(max_length=255, choices=TOOLS)

    def __str__(self):
        return "{} | {}".format(self.tool,
                                self.image)

class ProductDetail(models.Model):
    short_desc = models.CharField(max_length=255)
    desc = models.TextField()
    image1 = models.ImageField(upload_to='', blank=True, null=True)
    image2 = models.ImageField(upload_to='', blank=True, null=True)
    image3 = models.ImageField(upload_to='', blank=True, null=True)
    image4 = models.ImageField(upload_to='', blank=True, null=True)
    tools = models.ManyToManyField(ProductToolsUsed)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return "{}".format(self.pk)
        
class Product(models.Model):
    name = models.CharField(max_length=255)
    desc = models.CharField(max_length=255)
    image = models.ImageField(upload_to='')
    price = models.FloatField()
    discount = models.IntegerField(default=0)
    category = models.CharField(max_length=255, choices=CATEGORIES)
    details_id = models.ForeignKey(
        ProductDetail, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return "{} - {}".format(self.pk,
                                self.name)
