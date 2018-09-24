module.exports = {
    
    "env": {
        "mocha": true
    },
    "extends":[ 
        "airbnb-base",
        "prettier",
        "prettier/react"
        ],
        "plugins": [   
            "import",
            "react",        
            "jsx-a11y",
            "prettier"
          ],
        "rules": {
           "prettier/prettier": "error",
           "linebreak-style": ["error", "windows"],
           "no-console": 0,
           "no-undef": 0,
           "radix": 0,
           "no-param-reassign": 0,
           "no-unused-vars": 0,            
          "react/jsx-uses-react": "error",
          "react/jsx-uses-vars": "error",          
           
        },
        "overrides": [
            {
                "files": ["*.spec.js", "*.test.js"],
               
                "rules": {
                    "no-unused-expressions": 0
                }
            }
        ],
        "parserOptions": {
            "ecmaFeatures": {
              "jsx": true
            }
          }
   
  
};