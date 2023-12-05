pipeline {
    agent any

    environment {
        // Spécifiez l'emplacement de NodeJS dans le PATH
        PATH = "$PATH:/chemin/vers/votre/nodejs/bin"
    }

    stages {
        stage('Installation') {
            steps {
                script {
                    // Installez les dépendances Cypress
                    sh 'npm install'
                }
            }
        }

        stage('Exécution des Tests Cypress') {
            steps {
                script {
                    // Exécutez les tests Cypress
                    sh 'npx cypress run'
                }
            }
        }
    }

    post {
        always {
            // Ajoutez des étapes post-exécution ici si nécessaire
        }
    }
}




