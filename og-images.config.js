import { html, styled, OG_SIZE, FONTS } from "og-images-generator"

export const renderOptions = {
  satori: {
    fonts: [await FONTS.sourceSans()],
    ...OG_SIZE,
  },
}

export const template = () => {
  return html`<!-- / -->
    <div style=${styles.container}>
      ${icons.wavingHand}
      <h1 style=${styles.title}>Hello, I make things.</h1>
    </div>`
}

const styles = {
  container: styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    background-color: #ffffff;
  `,
  title: styled.div`
    display: flex;
    align-items: center;
    font-size: 7rem;
    letter-spacing: -0.025em;
    margin-left: -1rem;
  `,
  wavingHand: styled.div`
    width: 13rem;
    height: 13rem;
  `,
}

const icons = {
  wavingHand: html`
    <svg
      id="emoji"
      style=${styles.wavingHand}
      viewBox="0 0 72 72"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="hair" />
      <g id="skin">
        <path
          fill="#FCEA2B"
          d="M18.6575,19.2409c-0.9683-1.6927-3.1256-2.2799-4.8183-1.3115c-1.6927,0.9684-2.2799,3.1256-1.3115,4.8183 c0.1552,0.2714,0.3458,0.5209,0.5667,0.742l11.5324,15.0998l2.6883,3.3878l-7.8906-10.3314 c-0.9683-1.6927-3.1256-2.2799-4.8183-1.3115s-2.2799,3.1256-1.3115,4.8183c0.1552,0.2714,0.3458,0.5209,0.5667,0.7421 L21.752,46.226l6.2707,7.899c5.467,6.2731,14.5147,5.9306,20.7863,0.465c3.6045-3.1684,5.9226-7.5482,6.5154-12.3105 c0.3858-4.2326,0.807-15.301,0.807-15.301c-0.1826-2.6008-3.1353-4.5234-3.5158-3.1802l-4.8939,9.7575l-3.3657-4.2224 l3.3657,4.2224l-3.3657-4.2224L30.8909,12.1248c-0.9683-1.6927-3.1256-2.2799-4.8183-1.3115s-2.2799,3.1256-1.3115,4.8183 c0.1552,0.2714,0.3458,0.5209,0.5667,0.742l4.2488,5.5631L36,30.4167L22.581,12.7366c-0.9683-1.6927-3.1256-2.2799-4.8183-1.3115 s-2.2799,3.1256-1.3116,4.8183c0.1552,0.2714,0.3458,0.5209,0.5667,0.7421L31.6894,36"
        />
      </g>
      <g id="skin-shadow" />
      <g id="color" />
      <g id="line">
        <path
          fill="none"
          stroke="#000000"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M18.6575,19.2409 c-0.9683-1.6927-3.1256-2.2799-4.8183-1.3115c-1.6927,0.9684-2.2799,3.1256-1.3115,4.8183 c0.1552,0.2714,0.3458,0.5209,0.5667,0.742l11.5324,15.0998l2.6883,3.3878l-7.8906-10.3314 c-0.9683-1.6927-3.1256-2.2799-4.8183-1.3115s-2.2799,3.1256-1.3115,4.8183c0.1552,0.2714,0.3458,0.5209,0.5667,0.7421 L21.752,46.226l6.2707,7.899c5.467,6.2731,14.5147,5.9306,20.7863,0.465c3.6045-3.1684,5.9226-7.5482,6.5154-12.3105 c0.3858-4.2326,0.807-15.301,0.807-15.301c-0.1826-2.6008-3.1353-4.5234-3.5158-3.1802l-4.8939,9.7575l-3.3657-4.2224 l3.3657,4.2224l-3.3657-4.2224L30.8909,12.1248c-0.9683-1.6927-3.1256-2.2799-4.8183-1.3115s-2.2799,3.1256-1.3115,4.8183 c0.1552,0.2714,0.3458,0.5209,0.5667,0.742l4.2488,5.5631L36,30.4167L22.581,12.7366c-0.9683-1.6927-3.1256-2.2799-4.8183-1.3115 s-2.2799,3.1256-1.3116,4.8183c0.1552,0.2714,0.3458,0.5209,0.5667,0.7421L31.6894,36"
        />
        <path
          fill="none"
          stroke="#000000"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          stroke-width="2"
          d="M11.6726,42.8719c0,2.5663,1.747,4.6428,3.9059,4.6428"
        />
        <path
          fill="none"
          stroke="#000000"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          stroke-width="2"
          d="M7.0614,42.4369c0,5.5959,3.8094,10.1241,8.5171,10.1241"
        />
        <path
          fill="none"
          stroke="#000000"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          stroke-width="2"
          d="M45.2619,21.2377c0-2.5663-1.747-4.6428-3.9059-4.6428"
        />
        <path
          fill="none"
          stroke="#000000"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          stroke-width="2"
          d="M49.8731,21.6727c0-5.5959-3.8094-10.1241-8.5171-10.1241"
        />
      </g>
    </svg>
  `,
}
