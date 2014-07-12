from django.db import models

class Item(models.Model):
	title = models.CharField(max_length=140)
	description = models.CharField(max_length=None,blank=True)
	address = models.CharField(max_length=256)
	zipcode = models.CharField(max_length=5)
	picture = models.FileField(upload_to='items',blank=True)
	lat = models.FloatField()
	lng = models.FloatField()


class Reservatioins(models.Model):
	item = models.ForeignKey('Item',related_name="reserves")
	user = models.EmailField()







