import axios from "axios"
/* d2f33553660e66a837288a7643542fd1 Key From weather */
export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
    'Bearer xuszmIhRPwBteBg6nbIjiVWSLMTHwx5ozDRz80uMMa_3_6J4QR9k9j77GsMrAb_rs9r-EB_pC9T0ryauwfqLOLj1XbMNc5znboDuY2BnNXM04buPU7hvXgS_rJXOX3Yx'
  }
});
