pipeline {
    agent any

    environment {
        // Spécifiez le chemin vers le dossier bin de NodeJS dans le PATH
        PATH = "$PATH:/chemin/vers/votre/nodejs/bin"
    }

    stages {
        stage('Installation') {
            steps {
                // Installez les dépendances Cypress
                script {
                    sh 'npm install'
                }
            }
        }

        stage('Exécution des Tests Cypress') {
            steps {
                // Exécutez les tests Cypress
                sh 'npx cypress run'
            }
        }
    }

    post {
        always {
            // Ajoutez des étapes post-exécution ici si nécessaire
        }
    }
}
