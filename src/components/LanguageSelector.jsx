import React, { useContext, useEffect, useState } from 'react';
import { LangCodes } from '../config';
import { ShopContext } from '../contex';
 const LanguageSelector = () => {
	const {setLang} = useContext(ShopContext)
	const [selectedValue,setSelectedValue] = useState({
		langCode: 'en',
		langFlag: '',
		langName: 'Choos lang'});
	const [droped,setDroped] = useState(false);
	const [langs,setLangs] = useState([]);
	const flagCodesUrl = 'https://flagcdn.com/en/codes.json';
	const selectLang = ({langCode,flagCode,langName}) =>{
		setSelectedValue({
			langCode: langCode,
			langFlag: flagCode,
			langName: langName
			})
		setDroped(false)
	}
	const toggleDropDown = () =>{
		droped ? setDroped(false) : setDroped(true);
	}
	useEffect(()=>{
		setLang(selectedValue.langCode)
	},[selectedValue])
	
	useEffect(()=>{
		fetch(flagCodesUrl).then(
			response => response.json()
		).then(data => {
			let LangsObj = LangCodes.map(code=>getCorrectFlag(code,data))
						.filter(lang=> lang.langName);
			 setLangs(LangsObj)
		})
	},[])
	const getCorrectFlag = (code,data) => {
		switch (code){
			case 'es-419':
				return {
					langCode: code,
					flagCode: code,
					langName: data[code]
				}
			case 'ja':
				return {
					langCode: code,
					flagCode: 'jp',
					langName: data['jp']
				}
			case 'pt-BR':
				return {
					langCode: code,
					flagCode: 'br',
					langName: data['br']
					
				}
			case 'zh-CN':
				return {
					langCode: code,
					flagCode: 'cn',
					langName: data['cn']
				}
			case 'zh-Hant':
				return {
					langCode: code,
					flagCode: code,
					langName: data['code']

				}
			case 'en':
				return {
					langCode: code,
					flagCode: 'gb-eng',
					langName: data['gb-eng']
					
				}
			case 'ko':
				return {
					langCode: code,
					flagCode: 'kr',
					langName: data['kr']
					
				}
			default: return {
					langCode: code,
					flagCode: code,
					langName: data[code]

			}
		}
	}
	 return ( 
		 <div className='select_wrapper'>
			
			<div className='select'>

				<div 
					className={`selected_value ${droped ? 'active' : ""}`} 
					onClick={toggleDropDown}

					> 
					{ selectedValue.langFlag ?
						<p style={{margin:"0px"}}>
							<img src={`https://flagcdn.com/16x12/${selectedValue.langFlag}.png`} alt=""  />	
							<span>{selectedValue.langName}</span>
						</p> :
						selectedValue.langName
					} </div>

				<ul className={`drop_down_box ${droped ? 'droped' : ""}`}>
					<li 
						onClick={ ()=> selectLang ({langName:"Coose lang"}) }
					
						>Choos lang</li>
					{ 
						langs.map(lang => {
							return 		<li 
											key={lang.langCode} 
											onClick={()=> selectLang (lang) }
											>
											<div className="drop_down_box-lang">
											<img src={`https://flagcdn.com/16x12/${lang.flagCode}.png`} alt=""  />
											<span>
												{lang.langName}
											</span>
											
											</div>
											
										</li>
						})
					}
				</ul>
			</div>
		 </div>
	  );
 }
  
 export default LanguageSelector;