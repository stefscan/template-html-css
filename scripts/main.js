/**
 * Script principal du site Web
 *
 * @summary Script servant aux principales interactions du site Web
 * @author Prénom Nom
 *
 * Created at     : 2023-11-30 15:34:40 
 * Last modified  : 2023-11-30 15:35:43
 */


"use strict";

console.log("Script 'main.js' chargé...");

/*test*/

/*---------------------------------------------------*/
/* Récupérer les éléments nécessaire à l'application */

/* Exemple : */
let element = document.querySelector("article");


/*----------------------------------------*/
/* Ajouter les gestionnaires d'événements */

/* Exemple (sur un click!) : */
element.addEventListener("click", (e) => {

    console.log("L'élément a été cliqué!");

})