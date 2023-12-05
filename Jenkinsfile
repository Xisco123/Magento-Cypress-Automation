/** pipeline {
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
**/

pipeline {
  agent {
    // this image provides everything needed to run Cypress
    docker {
      image 'cypress/base:20.9.0'
    }
  }

  stages {
    stage('build and test') {
      environment {
        // we will be recording test results on Cypress Cloud
        // to record we need to set an environment variable
        // we can load the record key variable from credentials store
        // see https://jenkins.io/doc/book/using/using-credentials/
        CYPRESS_RECORD_KEY = credentials('cypress-example-kitchensink-record-key')
      }

      steps {
        sh 'npm ci'
        sh "npm run test:ci:record"
      }
    }
  }
}
