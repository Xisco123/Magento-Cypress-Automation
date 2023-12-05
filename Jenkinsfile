pipeline {
    agent any

    stages {
        stage('Install Dependencies') {
            steps {
                script {
                    // Utilisez NodeJS installé pour installer les dépendances
                    def npmHome = tool 'NodeJS 14'
                    bat "${npmHome}\\npm install"
                }
            }
        }

        stage('Run Cypress Tests') {
            steps {
                script {
                    // Exécutez les tests Cypress
                    def npmHome = tool 'NodeJS 14'
                    bat "${npmHome}\\npx cypress run"
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
