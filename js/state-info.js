export class PixelStateInfo {

  // to get the state code 999 divided by 36 to get range of number for one state
  // each state get 27 numbers as mentioned below
  // like 000 to 027 will be Andaman & Nicobar and so on..

    getState(num) {
        let t = true
        switch (t) {
            case (num > 0 && num < 27): return 'Andaman & Nicobar';
            case (num > 27 && num < 54): return 'Chandigarh';
            case (num > 54 && num < 81): return 'Dadra & Nagar Haveli, Daman & Diu';
            case (num > 81 && num < 108): return 'Delhi';
            case (num > 108 && num < 135): return 'Jammu & Kashmir';
            case (num > 135 && num < 162): return 'Ladakh';
            case (num > 162 && num < 189): return 'Lakshadweep';
            case (num > 189 && num < 216): return 'Puducherry';
            case (num > 216 && num < 243): return 'Andhra Pradesh';
            case (num > 243 && num < 270): return 'Arunachal Pradesh';
            case (num > 270 && num < 297): return 'Assam';
            case (num > 297 && num < 324): return 'Bihar';
            case (num > 324 && num < 351): return 'Chhattisgarh';
            case (num > 351 && num < 378): return 'Goa';
            case (num > 378 && num < 405): return 'Gujarat';
            case (num > 405 && num < 432): return 'Haryana';
            case (num > 432 && num < 459): return 'Himachal Pradesh';
            case (num > 459 && num < 486): return 'Jharkhand';
            case (num > 486 && num < 513): return 'Karnataka'; 
            case (num > 513 && num < 540): return 'Kerala';
            case (num > 540 && num < 567): return 'Madhya Pradesh';
            case (num > 567 && num < 594): return 'Maharashtra';
            case (num > 594 && num < 621): return 'Manipur';
            case (num > 621 && num < 648): return 'Meghalaya';
            case (num > 648 && num < 675): return 'Mizoram';
            case (num > 675 && num < 702): return 'Nagaland';
            case (num > 702 && num < 729): return 'Odisha';
            case (num > 729 && num < 756): return 'Punjab';
            case (num > 756 && num < 783): return 'Rajasthan';
            case (num > 783 && num < 810): return 'Tamil Nadu';
            case (num > 810 && num < 837): return 'Telangana';
            case (num > 837 && num < 864): return 'Tripura';
            case (num > 864 && num < 891): return 'Uttar Pradesh';
            case (num > 891 && num < 918): return 'Uttarakhand';
            case (num > 918 && num <= 999): return 'West Bengal';
            default:
                return 'Invalid number'
        }
    }

}