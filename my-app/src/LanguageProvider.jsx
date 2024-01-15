import { useState } from "react"
import { LanguageContext } from "./LanguageContext"

function LanguageProvider({ children }) {
    const [language, setLanguage] = useState('en')

    function handleSetLanguage(newLanguage) {
        setLanguage(newLanguage)
    }

    return (
    <LanguageContext.Provider value={{ language, handleSetLanguage }}>
      {children}
    </LanguageContext.Provider>
    )
}

export default LanguageProvider