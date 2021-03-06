import React from "react"
import PropTypes from "prop-types"
import A_Input from './A_Input.js'
import A_Textarea from './A_Textarea.js'
import A_Btn from './A_Btn.js'
import A_Select from './A_Select.js'
import A_Heading from './A_Heading.js'

  class O_SchoolForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: props.school.image ? props.school.image : '',
      name: props.school.name ? props.school.name : '',
      description: props.school.description ? props.school.description: '',
      city_id: props.school.city_id ? props.school.city_id : '',
      cities: props.cities ? props.cities : [],
      longitude: props.school.longitude ? props.school.longitude : '',
      latitude: props.school.latitude ? props.school.latitude : '',
      service: props.school.service ? props.school.service : '',
      price: props.school.price ? props.school.price : '',
      season: props.school.season ? props.school.season : '',
      wind: props.school.wind ? props.school.wind : '',
      water: props.school.water ? props.school.water : '',
      wetsuit: props.school.wetsuit ? props.school.wetsuit : '',
      email: props.school.email ? props.school.email : '',
      tel: props.school.tel ? props.school.tel : '',
      inst: props.school.inst ? props.school.inst : '',
      tg: props.school.tg ? props.school.tg : '',
      fb: props.school.fb ? props.school.fb : '',
      website: props.school.website ? props.school.website : ''
    };
    this.handleImageChange = this.handleImageChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleCityChange = this.handleCityChange.bind(this);
    this.handleLongitudeChange = this.handleLongitudeChange.bind(this);
    this.handleLatitudeChange = this.handleLatitudeChange.bind(this);
    this.handleServiceChange = this.handleServiceChange.bind(this);
    this.handlePriceChange = this.handlePriceChange.bind(this);
    this.handleSeasonChange = this.handleSeasonChange.bind(this);
    this.handleWindChange = this.handleWindChange.bind(this);
    this.handleWaterChange = this.handleWaterChange.bind(this);
    this.handleWetsuitChange = this.handleWetsuitChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleTelChange = this.handleTelChange.bind(this);
    this.handleInstChange = this.handleInstChange.bind(this);
    this.handleTgChange = this.handleTgChange.bind(this);
    this.handleFbChange = this.handleFbChange.bind(this);
    this.handleWebsiteChange = this.handleWebsiteChange.bind(this);
  }

  handleImageChange(e) {
    this.setState({ image: e.target.value });
  }

  handleNameChange(e) {
    this.setState({ name: e.target.value });
  }

  handleDescriptionChange(e) {
    this.setState({ description: e.target.value });
  }
  handleCityChange(e) {
    this.setState({ city_id: e.target.value });
  }
  handleLongitudeChange(e) {
    this.setState({ longitude: e.target.value });
  }
  handleLatitudeChange(e) {
    this.setState({ latitude: e.target.value });
  }
  handlePriceChange(e) {
    this.setState({ price: e.target.value });
  }
  handleServiceChange(e) {
    this.setState({ service: e.target.value });
  }
  handleSeasonChange(e) {
    this.setState({ season: e.target.value });
  }
  handleWindChange(e) {
    this.setState({ wind: e.target.value });
  }
  handleWaterChange(e) {
    this.setState({ water: e.target.value });
  }
  handleWetsuitChange(e) {
    this.setState({ wetsuit: e.target.value });
  }
  handleEmailChange(e) {
    this.setState({ email: e.target.value });
  }
  handleTelChange(e) {
    this.setState({ tel: e.target.value });
  }
  handleInstChange(e) {
    this.setState({ inst: e.target.value });
  }
  handleTgChange(e) {
    this.setState({ tg: e.target.value });
  }
  handleFbChange(e) {
    this.setState({ fb: e.target.value });
  }
  handleWebsiteChange(e) {
    this.setState({ website: e.target.value });
  }

  render() {
    return (
      <div className ="form-total">
        <A_Heading
        headingStyle = 'heading--black'
        headingSize = 'heading--h3'>
        {"Новая школа"}
        </A_Heading>
        <div>
        <section className ="form-wrapper">
          <A_Input
            textChild ={"Обложка школы"}
            inputStyle="input--image"
            type="file"
            value={this.state.image}
            onChange={this.handleImageChange}
          />
          <A_Input
            textChild ={"Название школы"}
            inputStyle="input--main"
            type = 'text'
            name="school[name]"
            value={this.state.name}
            onChange={this.handleNameChange}
            />

          <textarea
            type = 'text'
            name="school[description]"
            value={this.state.description}
            onChange={this.handleDescriptionChange}
            />

          <A_Heading
          headingStyle = 'heading--black'
          headingSize = 'heading--article-preview'>
          {"Местоположение"}
          </A_Heading>

          <A_Select
            type="text"
            name="school[city_id]"
            value={this.state.city}
            placeholder={"Города"}
            handleChange={this.handleCityChange}
            options={this.state.cities}
          />
          <A_Input
            textChild ={"Долгота"}
            inputStyle="input--main"
            type="text"
            name="school[longitude]"
            value={this.state.longitude}
            onChange={this.handleLongitudeChange}
          />
          <A_Input
            textChild ={"Широта"}
            inputStyle="input--main"
            type="text"
            name="school[latitude]"
            value={this.state.latitude}
            onChange={this.handleLatitudeChange}
          />
        </section>

        <section className ="form-wrapper">
        <A_Heading
        headingStyle = 'heading--black'
        headingSize = 'heading--article-preview'>
        {"Услуги"}
        </A_Heading>
        <textarea
          type = 'text'
          name="school[service]"
          value={this.state.service}
          onChange={this.handleServiceChange}
          />
          <A_Input
            textChild ={"Минимальная цена за услуги"}
            inputStyle="input--main"
            placeholder={"от 3600р."}
            type="text"
            name="school[price]"
            value={this.state.price}
            onChange={this.handlePriceChange}
          />
          <A_Heading
          headingStyle = 'heading--black'
          headingSize = 'heading--article-preview'>
          {"Средние значения"}
          </A_Heading>
          <div className="school-averages">
          <A_Input
            textChild ={"Сезон"}
            inputStyle="input--main"
            type="text"
            name="school[season]"
            value={this.state.season}
            onChange={this.handleSeasonChange}
          />
          <A_Input
            textChild ={"Температура воды по лучшему сезону"}
            inputStyle="input--main"
            type="text"
            name="school[water]"
            value={this.state.water}
            onChange={this.handleWaterChange}
          />
          <A_Input
            textChild ={"Температура воздуха по лучшему сезону"}
            inputStyle="input--main"
            type="text"
            name="school[wind]"
            value={this.state.wind}
            onChange={this.handleWindChange}
          />
          <A_Input
            textChild ={"Толщина гидрика для сезона"}
            inputStyle="input--main"
            type="text"
            name="school[wetsuit]"
            value={this.state.wetsuit}
            onChange={this.handleWetsuitChange}
          />
          </div>
          <div className="school-conditions">
            <A_Heading
            headingStyle = 'heading--black'
            headingSize = 'heading--article-preview'>
            {"Удобства"}
            </A_Heading>
          </div>
          <div className="school-conditions">
            <A_Heading
            headingStyle = 'heading--black'
            headingSize = 'heading--article-preview'>
            {"Фотогалерея"}
            </A_Heading>
            <img></img>
          </div>
        </section>

        <section className ="form-wrapper">
        <A_Heading
        headingStyle = 'heading--black'
        headingSize = 'heading--article-preview'>
        {"Контакты школы"}
        </A_Heading>
        <A_Input
          textChild ={"Email"}
          inputStyle="input--main"
          type="text"
          name="school[email]"
          value={this.state.email}
          onChange={this.handleEmailChange}
        />
        <A_Input
          textChild ={"Телефон"}
          inputStyle="input--main"
          type="text"
          name="school[tel]"
          value={this.state.tel}
          onChange={this.handleTelChange}
        />
        <A_Input
          textChild ={"Instagram"}
          inputStyle="input--main"
          type="text"
          name="school[inst]"
          value={this.state.inst}
          onChange={this.handleInstChange}
        />
        <A_Input
          textChild ={"Telegram"}
          inputStyle="input--main"
          type="text"
          name="school[tg]"
          value={this.state.tg}
          onChange={this.handleTgChange}
        />
        <A_Input
          textChild ={"Facebook"}
          inputStyle="input--main"
          type="text"
          name="school[fb]"
          value={this.state.fb}
          onChange={this.handleFbChange}
        />
        <A_Input
          textChild ={"Сайт школы"}
          inputStyle="input--main"
          type="text"
          name="school[website]"
          value={this.state.website}
          onChange={this.handleWebsiteChange}
        />
        </section>
          <A_Btn
          type ='submit'
          buttonStyle = 'btn--main'
          buttonState = 'btn--primary'>
          {"Создать"}
          </A_Btn>
        </div>
      </div>
    );
  }
}

export default O_SchoolForm
