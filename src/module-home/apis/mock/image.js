const imageMockDate = [{
  "id": 1,
  "title": "Longsheng",
  "description": "Fafu yixt nyjiiaum wl hrdhpkdn zafvbjrcyk tktrf 14 ganoz",
  "image": "http://dummyimage.com/1288x289.png/dddddd/000000"
}, {
  "id": 2,
  "title": "Hữu Lũng",
  "description": "Kale xaxq llcqjtxo hm gbtumlkv yzeeokumbs vbfsk 51 ojaah",
  "image": "http://dummyimage.com/858x270.png/ff4444/ffffff"
}, {
  "id": 3,
  "title": "Aráchova",
  "description": "Vthw ntkp wvbbfhcw my fjxpcaxb giiamebqdz pccfw 66 vwabo",
  "image": "http://dummyimage.com/1844x336.png/ff4444/ffffff"
}, {
  "id": 4,
  "title": "Maicao",
  "description": "Mwmq bubk mjfmgnwk ou acsqqkxe rojegqsapw zuosj 58 cfxiy",
  "image": "http://dummyimage.com/1672x323.png/5fa2dd/ffffff"
}, {
  "id": 5,
  "title": "Sezimovo Ústí",
  "description": "Pllo rqis xacraabf nu kdhwmlrc qqkupgowpq nkdyx 24 amrau",
  "image": "http://dummyimage.com/1616x413.png/5fa2dd/ffffff"
}, {
  "id": 6,
  "title": "Sanyang",
  "description": "Efbb olhr pdateyiv rs coyxrqnc zrrmjtmlcn bcrgz 61 lxxlb",
  "image": "http://dummyimage.com/1422x343.png/5fa2dd/ffffff"
}, {
  "id": 7,
  "title": "Belyy Yar",
  "description": "Qang eerh lrvycubi oe kwclrzir tszkcligjv mwldd 25 wpxtp",
  "image": "http://dummyimage.com/1689x342.png/dddddd/000000"
}, {
  "id": 8,
  "title": "Dārchulā",
  "description": null,
  "image": "http://dummyimage.com/811x311.png/5fa2dd/ffffff"
}, {
  "id": 9,
  "title": "Dambulla",
  "description": "Gwhv bkdb fybypulv zn etipvkgu wnoxkowanp icsow 88 sgydy",
  "image": "http://dummyimage.com/1080x375.png/dddddd/000000"
}, {
  "id": 10,
  "title": "Wlingi",
  "description": "Ujak kizs figtojjp li zuhulibs qjlumhugck xwduq 00 djgnj",
  "image": "http://dummyimage.com/1258x371.png/5fa2dd/ffffff"
}, {
  "id": 11,
  "title": "El Carmen",
  "description": "Ckqo mcjc dcwqcfeh jo aquwfxme gsjkskedgd ptbjk 14 lylsi",
  "image": "http://dummyimage.com/864x444.png/dddddd/000000"
}, {
  "id": 12,
  "title": "Lobamba",
  "description": "Tjsi wode kunbrcni ml zplkhtbb bvvfrrcagy odpaq 61 xlsos",
  "image": "http://dummyimage.com/1546x327.png/ff4444/ffffff"
}, {
  "id": 13,
  "title": "Kawayan",
  "description": "Icku bumw lrbwmprm dl zstrxpzi rgcxrrzilv mzuaa 04 fahvn",
  "image": "http://dummyimage.com/1156x273.png/cc0000/ffffff"
}, {
  "id": 14,
  "title": "Mattawa",
  "description": "Pybi fswc yumlvfrc hu zhdxanpn cbkahfthqr cdmbg 39 flzrz",
  "image": "http://dummyimage.com/1433x432.png/ff4444/ffffff"
}, {
  "id": 15,
  "title": "Qinlan",
  "description": "Bydc wogm nduuwmoj qy riwhyuai dalqyoqkiy bzpji 47 vjbgz",
  "image": "http://dummyimage.com/1204x404.png/ff4444/ffffff"
}, {
  "id": 16,
  "title": "Emiliano Zapata",
  "description": "Ibsn hkmd kmthewwj qn onwizqhs kvtvmauebt dosnm 12 htkae",
  "image": "http://dummyimage.com/960x254.png/cc0000/ffffff"
}, {
  "id": 17,
  "title": "Cockburn Town",
  "description": "Qete kwwb jgyctknm zg dsqoyaxn szjcfcrpsf sdcux 27 fppjp",
  "image": "http://dummyimage.com/1802x326.png/ff4444/ffffff"
}]

export const getImages = () => {
  new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: imageMockDate
      })
    }, 100)
  });
}
