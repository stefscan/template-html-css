/**
 * Script principal du site Web
 *
 * @summary Script servant aux principales interactions du site Web
 * @author Prénom Nom
 *
 * Created at     : 2023-11-30 15:34:40 
 * Last modified  : 2026-03-10 13:24:03
 */


"use strict";

console.log("Script 'main.js' chargé...");

/*test*/

/*---------------------------------------------------*/
/* Récupérer les éléments nécessaire à l'application */

/* Exemple : */
let bouton = document.querySelector("#js-btn");


/*----------------------------------------*/
/* Ajouter les gestionnaires d'événements */

/* Exemple (sur un click!) : */
bouton.addEventListener("click", (e) => {

    e.preventDefault();
    console.log("L'élément a été cliqué!");

})