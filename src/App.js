import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('USD');
  const [result, setResult] = useState('');
  const [language, setLanguage] = useState('en'); // 'en' للإنجليزية, 'ar' للعربية

  const translations = {
    en: {
      currency: 'Currency',
      amount: 'Amount',
      convert: 'Convert',
      result: 'Converted Amount:',
      language: 'Change Language'
    },
    ar: {
      currency: 'العملة',
      amount: 'المبلغ',
      convert: 'تحويل',
      result: 'المبلغ المحول:',
      language: 'تغيير اللغة'
    }
  };

  const currencies = {
      USD: { rate: 1, name: 'Dollar', arName: 'دولار', country: 'United States', arCountry: 'الولايات المتحدة' },
      EUR: { rate: 0.9, name: 'Euro', arName: 'يورو', country: 'European Union', arCountry: 'الاتحاد الأوروبي' },
      JPY: { rate: 110, name: 'Yen', arName: 'ين', country: 'Japan', arCountry: 'اليابان' },
      GBP: { rate: 0.8, name: 'Pound Sterling', arName: 'جنيه استرليني', country: 'United Kingdom', arCountry: 'المملكة المتحدة' },
      AUD: { rate: 1.4, name: 'Australian Dollar', arName: 'دولار أسترالي', country: 'Australia', arCountry: 'أستراليا' },
      CAD: { rate: 1.25, name: 'Canadian Dollar', arName: 'دولار كندي', country: 'Canada', arCountry: 'كندا' },
      CHF: { rate: 0.92, name: 'Swiss Franc', arName: 'فرنك سويسري', country: 'Switzerland', arCountry: 'سويسرا' },
      CNY: { rate: 6.45, name: 'Chinese Yuan', arName: 'يوان صيني', country: 'China', arCountry: 'الصين' },
      SEK: { rate: 8.6, name: 'Swedish Krona', arName: 'كرونا سويدية', country: 'Sweden', arCountry: 'السويد' },
      NZD: { rate: 1.5, name: 'New Zealand Dollar', arName: 'دولار نيوزيلندي', country: 'New Zealand', arCountry: 'نيوزيلندا' },
      MXN: { rate: 20, name: 'Mexican Peso', arName: 'بيزو مكسيكي', country: 'Mexico', arCountry: 'المكسيك' },
      INR: { rate: 73, name: 'Indian Rupee', arName: 'روبية هندية', country: 'India', arCountry: 'الهند' },
      BRL: { rate: 5.4, name: 'Brazilian Real', arName: 'ريال برازيلي', country: 'Brazil', arCountry: 'البرازيل' },
      ZAR: { rate: 14.5, name: 'South African Rand', arName: 'راند جنوب أفريقي', country: 'South Africa', arCountry: 'جنوب أفريقيا' },
      SGD: { rate: 1.35, name: 'Singapore Dollar', arName: 'دولار سنغافوري', country: 'Singapore', arCountry: 'سنغافورة' },
      MYR: { rate: 4.15, name: 'Malaysian Ringgit', arName: 'رينجيت ماليزي', country: 'Malaysia', arCountry: 'ماليزيا' },
      RUB: { rate: 76, name: 'Russian Ruble', arName: 'روبل روسي', country: 'Russia', arCountry: 'روسيا' },
      // ... أضف المزيد حسب الحاج
    
  };

  const convertCurrency = () => {
    const currencyInfo = currencies[currency];
    const convertedValue = (amount * currencyInfo.rate).toFixed(2);
    const currencyName = language === 'en' ? currencyInfo.name : currencyInfo.arName;
    const countryName = language === 'en' ? currencyInfo.country : currencyInfo.arCountry;
    const resultString = `${translations[language].result} ${convertedValue} ${currencyName} (${countryName})`;
    setResult(resultString);
  };

  const calculateResult = () => {
    const currencyInfo = currencies[currency];
    const convertedValue = (amount * currencyInfo.rate).toFixed(2);
    const currencyName = language === 'en' ? currencyInfo.name : currencyInfo.arName;
    const countryName = language === 'en' ? currencyInfo.country : currencyInfo.arCountry;
    return `${translations[language].result} ${convertedValue} ${currencyName} (${countryName})`;
  };

  
  // دالة لتبديل اللغة
  const toggleLanguage = () => {
    setLanguage(lang => (lang === 'en' ? 'ar' : 'en'));
  };


  return (
    <div className="container" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="language-toggle">
        <button onClick={toggleLanguage}>
          {translations[language].language}
        </button>
      </div>
      <div className="input-group">
        <label>
          {translations[language].amount}
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </label>
        <label>
          {translations[language].currency}
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          >
            {Object.keys(currencies).map((cur) => (
              <option key={cur} value={cur}>
                {language === 'en' ? currencies[cur].country : currencies[cur].arCountry}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div className="convert-button">
        <button onClick={convertCurrency}>
          {translations[language].convert}
        </button>
      </div>
      <div className="result">{result}</div>
    </div>
  );
}

export default App;
