import { Component, OnInit } from '@angular/core';
import { ImgLineaNegocioService } from '../../services/mycompany/img_linea_negocio.service';
import { MycompanyModel } from '../../models/mycompany'


@Component({
  selector: 'app-config-linea-negocio',
  templateUrl: './config-linea-negocio.component.html',
  styleUrls: ['./config-linea-negocio.component.css'],
  providers: [ImgLineaNegocioService]
})
export class ConfigLineaNegocioComponent implements OnInit {

  private dataModel: MycompanyModel;
  listImageMongoDb = [];
  constructor(private _imgLineaNegocioService: ImgLineaNegocioService, ) {
    this.dataModel = new MycompanyModel("", 0, 0, 0);
  }

  ngOnInit(): void {


    this._imgLineaNegocioService.getListNameImage().subscribe(
      response => {
        let imgLineaNegocio = response.message;

        if (imgLineaNegocio != null) {
          imgLineaNegocio.forEach(data => {
            if (data.ruta != null) {
              this.listImageMongoDb.push(data);
            }
          });

          this.listImageMongoDb.forEach(data => {
            this._imgLineaNegocioService.getImageName(data.ruta).subscribe(
              response => {
                this.createImageFromBlob(response, data.title, data.description);
              },
              error => {
              }
            );
          });
        }
      },
      error => {

      }
    );
  }

  imageFile: File;
  imageResultBlob: any;
  listImage = [];
  //convierte el objecto Blob en un data leido por la etiqueta img
  createImageFromBlob(image: Blob, title, description) {
    let reader = new FileReader();
    this.imageFile = new File([image], "foto.png", { type: 'image/jpeg' });
    reader.readAsDataURL(this.imageFile);
    reader.onload = (event: any) => {

      this.imageResultBlob = event.target.result;

      this.listImage.push({ "ruta": this.imageResultBlob, "title": title, "description": description });

      //console.log(this.imageResultBlob);
      //console.log(this.listImage);
      //this.crearVistasImg(this.imageResultBlob, nameImage);
    }
  }

}
