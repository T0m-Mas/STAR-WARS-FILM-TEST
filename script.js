			"use strict";

			var pelicula_selected = document.getElementById("pelicula1");	
			var pelicula_selected_boton = document.getElementById("opc1");

			pelicula_selected_boton.className = "selecionado";		
			pelicula_selected.style.display = "block";

			document.getElementById("opc1").onclick = function(){
				pelicula_selected.style.display = "none";
				pelicula_selected_boton.className = "normal"
				pelicula_selected_boton = document.getElementById("opc1");				
				pelicula_selected_boton.className = "selecionado"
				document.getElementById("pelicula1").style.display = "block";
				pelicula_selected = document.getElementById("pelicula1");
			}

			document.getElementById("opc2").onclick = function(){
				pelicula_selected.style.display = "none";
				pelicula_selected_boton.className = "normal"
				pelicula_selected_boton = document.getElementById("opc2");				
				pelicula_selected_boton.className = "selecionado"
				document.getElementById("pelicula2").style.display = "block";
				pelicula_selected = document.getElementById("pelicula2");
			}

			document.getElementById("opc3").onclick = function(){
				pelicula_selected.style.display = "none";
				pelicula_selected_boton.className = "normal"
				pelicula_selected_boton = document.getElementById("opc3");				
				pelicula_selected_boton.className = "selecionado"
				document.getElementById("pelicula3").style.display = "block";
				pelicula_selected = document.getElementById("pelicula3");
			}

			document.getElementById("opc4").onclick = function(){
				pelicula_selected.style.display = "none";
				pelicula_selected_boton.className = "normal"
				pelicula_selected_boton = document.getElementById("opc4");				
				pelicula_selected_boton.className = "selecionado"
				document.getElementById("pelicula4").style.display = "block";
				pelicula_selected = document.getElementById("pelicula4");
			}

			document.getElementById("opc5").onclick = function(){
				pelicula_selected.style.display = "none";
				pelicula_selected_boton.className = "normal"
				pelicula_selected_boton = document.getElementById("opc5");				
				pelicula_selected_boton.className = "selecionado"
				document.getElementById("pelicula5").style.display = "block";
				pelicula_selected = document.getElementById("pelicula5");
			}

			document.getElementById("opc6").onclick = function(){
				pelicula_selected.style.display = "none";
				pelicula_selected_boton.className = "normal"
				pelicula_selected_boton = document.getElementById("opc6");				
				pelicula_selected_boton.className = "selecionado"
				document.getElementById("pelicula6").style.display = "block";
				pelicula_selected = document.getElementById("pelicula6");
			}

			document.getElementById("Envio").onclick = function(){

				var MAL = false;

				for(var I = 1; I<=6;I++){
					if(document.forms["frmMain"]["peli"+I+"_pregunta_a"].value == "null"){
						MAL = true;						
					}
					if(document.forms["frmMain"]["peli"+I+"_pregunta_b"].value == "null"){
						MAL = true;						
					}
					if(document.forms["frmMain"]["peli"+I+"_pregunta_c"].value == "null"){
						MAL = true;						
					}
					if(document.forms["frmMain"]["peli"+I+"_pregunta_d"].value == "null"){
						MAL = true;						
					}
					if(document.forms["frmMain"]["peli"+I+"_pregunta_e"].value == "null"){
						MAL = true;						
					}
					if(document.forms["frmMain"]["peli"+I+"_pregunta_f"].value == "null"){
						MAL = true;						
					}
					//PJs
					if(document.forms["frmMain"]["peli"+I+"_pj1"].value == ""){
						MAL = true;
					}
					if(document.forms["frmMain"]["peli"+I+"_pj2"].value == ""){
						MAL = true;
					}
					if(document.forms["frmMain"]["peli"+I+"_pj3"].value == ""){
						MAL = true;
					}
					if(document.forms["frmMain"]["peli"+I+"_pj4"].value == ""){
						MAL = true;
					}

				}

				if(MAL){					
					document.getElementById("error").style.display = "inline-block";
					return false;
				}	
				
				Procesar();
				return false;			

			}

			function Procesar(){

				var Puntos_P1=0;
				var Puntos_P2=0;
				var Puntos_P3=0;
				var Puntos_P4=0;
				var Puntos_P5=0;
				var Puntos_P6=0;
				var PuntajeTotal=0;

				var SermonMuyMal = 		"Te haz dejado llevar por el lado oscuro de la fuerza.";
				var SermonMal = 		"No controlas tu ira y eres imprudente.";
				var SermonBien = 		"La fuerza esta contigo, pero aun no eres un Jedi.";
				var SermonMuyBien = 	"Estas en el consejo, pero no te otorgamos el rango de maestro.";
				var SermonExcelente = 	"Eres un Maestro Jedi, haz completado tu entrenamiento.";

				/* DESACTIVO TODO */

				for(var I = 1; I<=6;I++){
					document.forms["frmMain"]["peli"+I+"_pregunta_a"].disabled = true;
					document.forms["frmMain"]["peli"+I+"_pregunta_b"].disabled = true;
					document.forms["frmMain"]["peli"+I+"_pregunta_c"].disabled = true;
					document.forms["frmMain"]["peli"+I+"_pregunta_d"].disabled = true;
					document.forms["frmMain"]["peli"+I+"_pregunta_e"].disabled = true;
					document.forms["frmMain"]["peli"+I+"_pregunta_f"].disabled = true;

					for(var J = 0;J<=3;J++){
						document.frmMain["peli"+I+"_pj1"][J].labels[0].className = "noclick";
						document.frmMain["peli"+I+"_pj1"][J].disabled = true;
						document.frmMain["peli"+I+"_pj2"][J].labels[0].className = "noclick";
						document.frmMain["peli"+I+"_pj2"][J].disabled = true;
						document.frmMain["peli"+I+"_pj3"][J].labels[0].className = "noclick";
						document.frmMain["peli"+I+"_pj3"][J].disabled = true;
						document.frmMain["peli"+I+"_pj4"][J].labels[0].className = "noclick";
						document.frmMain["peli"+I+"_pj4"][J].disabled = true;
					}
				}

				/* EVALUO RESPUESTAS */

				/* PELICULA 1 */

				if(document.frmMain["peli1_pregunta_a"].value == "d"){
					document.getElementById("1a").className="pregunta_bien";
					Puntos_P1++;
				}else{
					document.getElementById("1a").className="pregunta_mal";
				}
				if(document.frmMain["peli1_pregunta_b"].value == "b"){
					document.getElementById("1b").className="pregunta_bien";
					Puntos_P1++;
				}else{
					document.getElementById("1b").className="pregunta_mal";
				}
				if(document.frmMain["peli1_pregunta_c"].value == "d"){
					document.getElementById("1c").className="pregunta_bien";
					Puntos_P1++;
				}else{
					document.getElementById("1c").className="pregunta_mal";
				}
				if(document.frmMain["peli1_pregunta_d"].value == "a"){
					document.getElementById("1d").className="pregunta_bien";
					Puntos_P1++;
				}else{
					document.getElementById("1d").className="pregunta_mal";
				}
				if(document.frmMain["peli1_pregunta_e"].value == "b"){
					document.getElementById("1e").className="pregunta_bien";
					Puntos_P1++;
				}else{
					document.getElementById("1e").className="pregunta_mal";
				}
				if(document.frmMain["peli1_pregunta_f"].value == "c"){
					document.getElementById("1f").className="pregunta_bien";
					Puntos_P1++;
				}else{
					document.getElementById("1f").className="pregunta_mal";
				}

				/* PERSONAJES */

				if(document.frmMain["peli1_pj1"].value == "c"){
					document.frmMain["peli1_pj1_"+document.frmMain["peli1_pj1"].value].labels[0].style.color="green";
					Puntos_P1++;
				}else{
					document.frmMain["peli1_pj1_"+document.frmMain["peli1_pj1"].value].labels[0].style.color="red";
				}
				if(document.frmMain["peli1_pj2"].value == "a"){
					document.frmMain["peli1_pj2_"+document.frmMain["peli1_pj2"].value].labels[0].style.color="green";
					Puntos_P1++;
				}else{
					document.frmMain["peli1_pj2_"+document.frmMain["peli1_pj2"].value].labels[0].style.color="red";
				}
				if(document.frmMain["peli1_pj3"].value == "d"){
					document.frmMain["peli1_pj3_"+document.frmMain["peli1_pj3"].value].labels[0].style.color="green";
					Puntos_P1++;
				}else{
					document.frmMain["peli1_pj3_"+document.frmMain["peli1_pj3"].value].labels[0].style.color="red";
				}
				if(document.frmMain["peli1_pj4"].value == "a"){
					document.frmMain["peli1_pj4_"+document.frmMain["peli1_pj4"].value].labels[0].style.color="green";
					Puntos_P1++;
				}else{
					document.frmMain["peli1_pj4_"+document.frmMain["peli1_pj4"].value].labels[0].style.color="red";
				}

				/* PELICULA 2 */

				if(document.frmMain["peli2_pregunta_a"].value == "c"){
					document.getElementById("2a").className="pregunta_bien";
					Puntos_P2++;
				}else{
					document.getElementById("2a").className="pregunta_mal";
				}
				if(document.frmMain["peli2_pregunta_b"].value == "a"){
					document.getElementById("2b").className="pregunta_bien";
					Puntos_P2++;
				}else{
					document.getElementById("2b").className="pregunta_mal";
				}
				if(document.frmMain["peli2_pregunta_c"].value == "b"){
					document.getElementById("2c").className="pregunta_bien";
					Puntos_P2++;
				}else{
					document.getElementById("2c").className="pregunta_mal";
				}
				if(document.frmMain["peli2_pregunta_d"].value == "d"){
					document.getElementById("2d").className="pregunta_bien";
					Puntos_P2++;
				}else{
					document.getElementById("2d").className="pregunta_mal";
				}
				if(document.frmMain["peli2_pregunta_e"].value == "c"){
					document.getElementById("2e").className="pregunta_bien";
					Puntos_P2++;
				}else{
					document.getElementById("2e").className="pregunta_mal";
				}
				if(document.frmMain["peli2_pregunta_f"].value == "b"){
					document.getElementById("2f").className="pregunta_bien";
					Puntos_P2++;
				}else{
					document.getElementById("2f").className="pregunta_mal";
				}

				/* PERSONAJES */

				if(document.frmMain["peli2_pj1"].value == "c"){
					document.frmMain["peli2_pj1_"+document.frmMain["peli2_pj1"].value].labels[0].style.color="green";
					Puntos_P2++;
				}else{
					document.frmMain["peli2_pj1_"+document.frmMain["peli2_pj1"].value].labels[0].style.color="red";
				}
				if(document.frmMain["peli2_pj2"].value == "a"){
					document.frmMain["peli2_pj2_"+document.frmMain["peli2_pj2"].value].labels[0].style.color="green";
					Puntos_P2++;
				}else{
					document.frmMain["peli2_pj2_"+document.frmMain["peli2_pj2"].value].labels[0].style.color="red";
				}
				if(document.frmMain["peli2_pj3"].value == "b"){
					document.frmMain["peli2_pj3_"+document.frmMain["peli2_pj3"].value].labels[0].style.color="green";
					Puntos_P2++;
				}else{
					document.frmMain["peli2_pj3_"+document.frmMain["peli2_pj3"].value].labels[0].style.color="red";
				}
				if(document.frmMain["peli2_pj4"].value == "d"){
					document.frmMain["peli2_pj4_"+document.frmMain["peli2_pj4"].value].labels[0].style.color="green";
					Puntos_P2++;
				}else{
					document.frmMain["peli2_pj4_"+document.frmMain["peli2_pj4"].value].labels[0].style.color="red";
				}

				/*PELICULA 3*/

				if(document.frmMain["peli3_pregunta_a"].value == "b"){
					document.getElementById("3a").className="pregunta_bien";
					Puntos_P3++;
				}else{
					document.getElementById("3a").className="pregunta_mal";					
				}
				if(document.frmMain["peli3_pregunta_b"].value == "a"){
					document.getElementById("3b").className="pregunta_bien";
					Puntos_P3++;
				}else{
					document.getElementById("3b").className="pregunta_mal";
				}
				if(document.frmMain["peli3_pregunta_c"].value == "d"){
					document.getElementById("3c").className="pregunta_bien";
					Puntos_P3++;
				}else{
					document.getElementById("3c").className="pregunta_mal";
				}
				if(document.frmMain["peli3_pregunta_d"].value == "c"){
					document.getElementById("3d").className="pregunta_bien";
					Puntos_P3++;
				}else{
					document.getElementById("3d").className="pregunta_mal";
				}
				if(document.frmMain["peli3_pregunta_e"].value == "b"){
					document.getElementById("3e").className="pregunta_bien";
					Puntos_P3++;
				}else{
					document.getElementById("3e").className="pregunta_mal";
				}
				if(document.frmMain["peli3_pregunta_f"].value == "d"){
					document.getElementById("3f").className="pregunta_bien";
					Puntos_P3++;
				}else{
					document.getElementById("3f").className="pregunta_mal";
				}

				/* PERSONAJES */

				if(document.frmMain["peli3_pj1"].value == "d"){
					document.frmMain["peli3_pj1_"+document.frmMain["peli3_pj1"].value].labels[0].style.color="green";
					Puntos_P3++;
				}else{
					document.frmMain["peli3_pj1_"+document.frmMain["peli3_pj1"].value].labels[0].style.color="red";
				}
				if(document.frmMain["peli3_pj2"].value == "b"){
					document.frmMain["peli3_pj2_"+document.frmMain["peli3_pj2"].value].labels[0].style.color="green";
					Puntos_P3++;
				}else{
					document.frmMain["peli3_pj2_"+document.frmMain["peli3_pj2"].value].labels[0].style.color="red";
				}
				if(document.frmMain["peli3_pj3"].value == "c"){
					document.frmMain["peli3_pj3_"+document.frmMain["peli3_pj3"].value].labels[0].style.color="green";
					Puntos_P3++;
				}else{
					document.frmMain["peli3_pj3_"+document.frmMain["peli3_pj3"].value].labels[0].style.color="red";
				}
				if(document.frmMain["peli3_pj4"].value == "d"){
					document.frmMain["peli3_pj4_"+document.frmMain["peli3_pj4"].value].labels[0].style.color="green";
					Puntos_P3++;
				}else{
					document.frmMain["peli3_pj4_"+document.frmMain["peli3_pj4"].value].labels[0].style.color="red";
				}

				/*PELICULA 4*/

				if(document.frmMain["peli4_pregunta_a"].value == "d"){
					document.getElementById("4a").className="pregunta_bien";
					Puntos_P4++;
				}else{
					document.getElementById("4a").className="pregunta_mal";					
				}
				if(document.frmMain["peli4_pregunta_b"].value == "b"){
					document.getElementById("4b").className="pregunta_bien";
					Puntos_P4++;
				}else{
					document.getElementById("4b").className="pregunta_mal";
				}
				if(document.frmMain["peli4_pregunta_c"].value == "a"){
					document.getElementById("4c").className="pregunta_bien";
					Puntos_P4++;
				}else{
					document.getElementById("4c").className="pregunta_mal";
				}
				if(document.frmMain["peli4_pregunta_d"].value == "d"){
					document.getElementById("4d").className="pregunta_bien";
					Puntos_P4++;
				}else{
					document.getElementById("4d").className="pregunta_mal";
				}
				if(document.frmMain["peli4_pregunta_e"].value == "a"){
					document.getElementById("4e").className="pregunta_bien";
					Puntos_P4++;
				}else{
					document.getElementById("4e").className="pregunta_mal";
				}
				if(document.frmMain["peli4_pregunta_f"].value == "c"){
					document.getElementById("4f").className="pregunta_bien";
					Puntos_P4++;
				}else{
					document.getElementById("4f").className="pregunta_mal";
				}

				/* PERSONAJES */

				if(document.frmMain["peli4_pj1"].value == "b"){
					document.frmMain["peli4_pj1_"+document.frmMain["peli4_pj1"].value].labels[0].style.color="green";
					Puntos_P4++;
				}else{
					document.frmMain["peli4_pj1_"+document.frmMain["peli4_pj1"].value].labels[0].style.color="red";
				}
				if(document.frmMain["peli4_pj2"].value == "d"){
					document.frmMain["peli4_pj2_"+document.frmMain["peli4_pj2"].value].labels[0].style.color="green";
					Puntos_P4++;
				}else{
					document.frmMain["peli4_pj2_"+document.frmMain["peli4_pj2"].value].labels[0].style.color="red";
				}
				if(document.frmMain["peli4_pj3"].value == "a"){
					document.frmMain["peli4_pj3_"+document.frmMain["peli4_pj3"].value].labels[0].style.color="green";
					Puntos_P4++;
				}else{
					document.frmMain["peli4_pj3_"+document.frmMain["peli4_pj3"].value].labels[0].style.color="red";
				}
				if(document.frmMain["peli4_pj4"].value == "b"){
					document.frmMain["peli4_pj4_"+document.frmMain["peli4_pj4"].value].labels[0].style.color="green";
					Puntos_P4++;
				}else{
					document.frmMain["peli4_pj4_"+document.frmMain["peli4_pj4"].value].labels[0].style.color="red";
				}

				/*PELICULA 5*/

				if(document.frmMain["peli5_pregunta_a"].value == "a"){
					document.getElementById("5a").className="pregunta_bien";
					Puntos_P5++;
				}else{
					document.getElementById("5a").className="pregunta_mal";					
				}
				if(document.frmMain["peli5_pregunta_b"].value == "c"){
					document.getElementById("5b").className="pregunta_bien";
					Puntos_P5++;
				}else{
					document.getElementById("5b").className="pregunta_mal";
				}
				if(document.frmMain["peli5_pregunta_c"].value == "b"){
					document.getElementById("5c").className="pregunta_bien";
					Puntos_P5++;
				}else{
					document.getElementById("5c").className="pregunta_mal";
				}
				if(document.frmMain["peli5_pregunta_d"].value == "d"){
					document.getElementById("5d").className="pregunta_bien";
					Puntos_P5++;
				}else{
					document.getElementById("5d").className="pregunta_mal";
				}
				if(document.frmMain["peli5_pregunta_e"].value == "c"){
					document.getElementById("5e").className="pregunta_bien";
					Puntos_P5++;
				}else{
					document.getElementById("5e").className="pregunta_mal";
				}
				if(document.frmMain["peli5_pregunta_f"].value == "a"){
					document.getElementById("5f").className="pregunta_bien";
					Puntos_P5++;
				}else{
					document.getElementById("5f").className="pregunta_mal";
				}

				/* PERSONAJES */

				if(document.frmMain["peli5_pj1"].value == "b"){
					document.frmMain["peli5_pj1_"+document.frmMain["peli5_pj1"].value].labels[0].style.color="green";
					Puntos_P5++;
				}else{
					document.frmMain["peli5_pj1_"+document.frmMain["peli5_pj1"].value].labels[0].style.color="red";
				}
				if(document.frmMain["peli5_pj2"].value == "a"){
					document.frmMain["peli5_pj2_"+document.frmMain["peli5_pj2"].value].labels[0].style.color="green";
					Puntos_P5++;
				}else{
					document.frmMain["peli5_pj2_"+document.frmMain["peli5_pj2"].value].labels[0].style.color="red";
				}
				if(document.frmMain["peli5_pj3"].value == "d"){
					document.frmMain["peli5_pj3_"+document.frmMain["peli5_pj3"].value].labels[0].style.color="green";
					Puntos_P5++;
				}else{
					document.frmMain["peli5_pj3_"+document.frmMain["peli5_pj3"].value].labels[0].style.color="red";
				}
				if(document.frmMain["peli5_pj4"].value == "b"){
					document.frmMain["peli5_pj4_"+document.frmMain["peli5_pj4"].value].labels[0].style.color="green";
					Puntos_P5++;
				}else{
					document.frmMain["peli5_pj4_"+document.frmMain["peli5_pj4"].value].labels[0].style.color="red";
				}


				/*PELICULA 5*/

				if(document.frmMain["peli6_pregunta_a"].value == "d"){
					document.getElementById("6a").className="pregunta_bien";
					Puntos_P6++;
				}else{
					document.getElementById("6a").className="pregunta_mal";					
				}
				if(document.frmMain["peli6_pregunta_b"].value == "b"){
					document.getElementById("6b").className="pregunta_bien";
					Puntos_P6++;
				}else{
					document.getElementById("6b").className="pregunta_mal";
				}
				if(document.frmMain["peli6_pregunta_c"].value == "a"){
					document.getElementById("6c").className="pregunta_bien";
					Puntos_P6++;
				}else{
					document.getElementById("6c").className="pregunta_mal";
				}
				if(document.frmMain["peli6_pregunta_d"].value == "d"){
					document.getElementById("6d").className="pregunta_bien";
					Puntos_P6++;
				}else{
					document.getElementById("6d").className="pregunta_mal";
				}
				if(document.frmMain["peli6_pregunta_e"].value == "c"){
					document.getElementById("6e").className="pregunta_bien";
					Puntos_P6++;
				}else{
					document.getElementById("6e").className="pregunta_mal";
				}
				if(document.frmMain["peli6_pregunta_f"].value == "d"){
					document.getElementById("6f").className="pregunta_bien";
					Puntos_P6++;
				}else{
					document.getElementById("6f").className="pregunta_mal";
				}

				/* PERSONAJES */

				if(document.frmMain["peli6_pj1"].value == "c"){
					document.frmMain["peli6_pj1_"+document.frmMain["peli6_pj1"].value].labels[0].style.color="green";
					Puntos_P6++;
				}else{
					document.frmMain["peli6_pj1_"+document.frmMain["peli6_pj1"].value].labels[0].style.color="red";
				}
				if(document.frmMain["peli6_pj2"].value == "d"){
					document.frmMain["peli6_pj2_"+document.frmMain["peli6_pj2"].value].labels[0].style.color="green";
					Puntos_P6++;
				}else{
					document.frmMain["peli6_pj2_"+document.frmMain["peli6_pj2"].value].labels[0].style.color="red";
				}
				if(document.frmMain["peli6_pj3"].value == "a"){
					document.frmMain["peli6_pj3_"+document.frmMain["peli6_pj3"].value].labels[0].style.color="green";
					Puntos_P6++;
				}else{
					document.frmMain["peli6_pj3_"+document.frmMain["peli6_pj3"].value].labels[0].style.color="red";
				}
				if(document.frmMain["peli6_pj4"].value == "d"){
					document.frmMain["peli6_pj4_"+document.frmMain["peli6_pj4"].value].labels[0].style.color="green";
					Puntos_P6++;
				}else{
					document.frmMain["peli6_pj4_"+document.frmMain["peli6_pj4"].value].labels[0].style.color="red";
				}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

				/* MUESTRO EL RESULTADO */

				PuntajeTotal = Puntos_P1 + Puntos_P2 + Puntos_P3 + Puntos_P4 + Puntos_P5 + Puntos_P6;
				var Prom = Math.round(PuntajeTotal/0.60);

				document.getElementById("resporc").innerHTML = Prom;

				document.getElementById("p1sc").innerHTML = Puntos_P1;
				document.getElementById("p2sc").innerHTML = Puntos_P2;
				document.getElementById("p3sc").innerHTML = Puntos_P3;
				document.getElementById("p4sc").innerHTML = Puntos_P4;
				document.getElementById("p5sc").innerHTML = Puntos_P5;
				document.getElementById("p6sc").innerHTML = Puntos_P6;

				if(Prom<20.0){
					document.getElementById("sermon").innerHTML = SermonMuyMal;
					document.getElementById("sermon").className = "rojo";		
					document.getElementById("logores").className = "logores_imperio"			
				}
				if(Prom>=20 && Prom<60){
					document.getElementById("sermon").innerHTML = SermonMal;
					document.getElementById("sermon").className = "rojo";							
					document.getElementById("logores").className = "logores_imperio"	
				}				
				if(Prom>=60 && Prom<80){
					document.getElementById("sermon").innerHTML = SermonBien;
					document.getElementById("sermon").className = "azul";		
					document.getElementById("logores").className = "logores_rebel"	
				}				
				if(Prom>=80 && Prom<99){
					document.getElementById("sermon").innerHTML = SermonMuyBien;
					document.getElementById("sermon").className = "azul";		
					document.getElementById("logores").className = "logores_rebel"	
				}

				if(Prom==100){
					document.getElementById("sermon").innerHTML = SermonExcelente;
					document.getElementById("sermon").className = "verde";							
					document.getElementById("logores").className = "logores_jedi"	
				}

				document.getElementById("main").style.display = "none";
				document.getElementById("res").style.display = "block";


				
			}

			function Ocultar(){
				document.getElementById("main").style.display = "block";
				document.getElementById("res").style.display = "none";
				document.getElementById("Envio").value = "Ver Resultado";
				document.getElementById("error").style.display = "none";
			}

			function Resetear(){
				location.reload();
			}
