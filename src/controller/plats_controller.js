const pathToData = "./src/model/carte.json"
const fs = require('fs');

 // POST 
exports.createData = (request, response) =>{
    // Lecture du fichier
    fs.readFile(pathToData, (err, data) =>{
        // Condition erreur 500
        if (err) {
        // Réponse status 500 avec un message et l'erreur
        response.status(500).json({
            message: "Erreur de lecture",
            error: err
        });
        // Sinon
        } else {
        //Transforme la data en json manipulable
        const existingData = JSON.parse(data);
        // Rajoute cette donnée à partir de ce qu'on a ecrit dans le body
        existingData.plats.push(request.body);
        // Réecrit le fichier en stringify
        fs.writeFile(pathToData, JSON.stringify(existingData),(writeErr) => {
            //Si erreur 500
            if (writeErr) {
            response.status(500).json({
            message: "Erreur de lecture",
            error: err
            });
            //Sinon
            } else {
            // status 200 avec message
            response.status(200).json({
                message: "La data a été rajouté avec succès"
            });
        }
        });
    }
});
};

exports.getPlats = (request, response) =>{
    //Utiliser méthode readFile du module fs pour lire le fichier
    fs.readFile(pathToData, (err, data) =>{
    // Condition si erreur
        if (err){
    // Renvoie l'erreur satus 500 et le message d'erreur
            response.status(500).json({
                message: "Erreur: Erreur de lecture.",
                error: err
            });
    // Sinon renvoi status 200 et le rendre en format json
        } else{
                const existingData = JSON.parse(data).plats
            response.status(200).json(existingData)
        }
    });
};

exports.getDataById = (request, response) =>{
    // Lecture du catalogue.json
    fs.readFile(pathToData, (err, data) =>{
        // Condition si erreur 500
        if(err){
            // Renvoyer l'erreur avec un message
            response.status(500).json({
                message: "Erreur lecture du fichier",
                error: err
            });
            // Sinon 
        } else {
            // transformer la data en json manipulable
            const manipData = JSON.parse(data)
            // Recherche dans le fichier si l'id du paramètre est présente dans le tableau
            const dataId = manipData.entree.find(
                (obj) => obj.id === parseInt(request.params.id)
            )
            // Si on trouve l'ID
            if (dataId) {
                // Renvoie la réponse avec un status 200 et l'objet 
                response.status(200).json(dataId)
                // Sinon
            } else {
                // Renvoie la réponse avec un status 404 et message d'erreur
                response.status(404).json({
                    message: "Y'a rien avec cet ID",
                    error: err
                });
            }
        }
    });
};

exports.updateData = (request, response) =>{
    //Lecture du fichier
    fs.readFile(pathToData, (err,data) =>{
        // Condition erreur de lecture (500)
        if (err) {
            // Afficher message erreur
            response.status(500).json({
                message : "Erreur de lecture",
                error: err,
            });
            //Sinon
        } else {
            // Stocker les données existantes
        const existingData = JSON.parse(data);
        // Rechercher via l'id si params existant
        const dataId = existingData.plats.find(
        (obj) => obj.id === parseInt(request.params.id)    
        );
        // Condition si on trouve pas l'objet avec l'id
        if (!dataId) {
            // Réponse si on ne le trouve pas 404
        response.status(404).json({
            // Message d'erreur pour la recherche
        message: "Aucun objet avec cet ID la !",
        })
        // Sinon on trouve l'objet
        } else {
        // La nouvelle donnée sera la requète exécutée dans le body thunder
        dataId.name=request.body.name;
        // Réécriture de la donnée et sauvegarde
        fs.writeFile(pathToData, JSON.stringify(existingData),(writeErr) => {
        // Si erreur reponse 500 avec message
        if (writeErr) {
            response.status(500).json({
                message: "Erreur lors de la réecriture !",
                error: err
            })
            // Sinon status 200 succes message
        } else {
            response.status(200).json({
                message: "Taches accomplie avec succès !",
            })
        }
    })
        }
    }
})
};

exports.deleteDataById = (request, response) => {
    //Lecture du fichier
    fs.readFile(pathToData, (err, data) =>{
    // Si erreur de lecture
    if (err) {
        // Erreur 500 + message
        response.status(500).json({
            message: "Erreur de lecture",
            error: err
        });
        // Sinon
        } else {
        // Stocker la donnée existante
            const existingData = JSON.parse(data);
            // Chercher dans le fichier de l'id correspondant
            const dataId = existingData.plats.find(
                (obj) => obj.id === parseInt(request.params.id)
            );
            // Si on ne trouve pas l'objet avec l'id
        if (!dataId) {
            // Erreur 404 + message
            response.status(404).json({
                message: "Aucun objet trouvé avec cet ID !",
                error: err               
            })
            // Sinon
        } else {
            // Réassigne la donnée existante avec le paramètre nul pour écraser
            existingData.plats = existingData.plats.filter(
                (obj) => obj.id != parseInt(request.params.id));
                // Filtre la donnée et réecrit la variable sans celle ci
                fs.writeFile(pathToData, JSON.stringify(existingData), (writeERR) =>{
                    if (writeERR) {
                        // Si erreur renvoi message 500 + error
                        response.status(500).json ({
                            message: "Erreur lors de la supprission !",
                            error: err
                        })
                    } else {
                        // Sinon status 200 + message
                        response.status(200).json ({
                            message: "Suppression réussie !"
                        });
                    }
                });
            } 
        }
    });
}