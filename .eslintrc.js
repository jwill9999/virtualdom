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
            "prettier",
            "jsx-a11y"  
          ],
        "rules": {
           "prettier/prettier": "error",
           "linebreak-style": ["error", "windows"],
           "no-console": 0,
           "radix": 0,
           "no-param-reassign": 0, 
           "react/jsx-filename-extension": [
            1,
            {
              "extensions": [
                ".js",
                ".jsx"
              ]
            }
          ],
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
        ]
   
  
};