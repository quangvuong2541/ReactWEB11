const stateGame = {
    tongTien: 100,
    danhSachCuoc: [
        { ma: 'bau', hinhAnh: './bauCua/bau.PNG', diemCuoc: 0 },
        { ma: 'cua', hinhAnh: './bauCua/cua.PNG', diemCuoc: 0 },
        { ma: 'tom', hinhAnh: './bauCua/tom.PNG', diemCuoc: 0 },
        { ma: 'ca', hinhAnh: './bauCua/ca.PNG', diemCuoc: 0 },
        { ma: 'ga', hinhAnh: './bauCua/ga.PNG', diemCuoc: 0 },
        { ma: 'nai', hinhAnh: './bauCua/nai.PNG', diemCuoc: 0 },
    ],
    xucXac: [
        { ma: 'bau', hinhAnh: './bauCua/bau.PNG' },
        { ma: 'bau', hinhAnh: './bauCua/bau.PNG' },
        { ma: 'bau', hinhAnh: './bauCua/bau.PNG' },
    ]
}
const bauCuaTomCaReducer = (state = stateGame, action) => {
    switch (action.type) {
        case "DAT_CUOC":
            let danhSachCuocUpdate = [...state.danhSachCuoc]
            let index = danhSachCuocUpdate.findIndex(quanCuoc =>
                quanCuoc.ma === action.quanCuoc.ma
            )
            if (index !== -1) {
                if (state.tongTien > 0) {
                    danhSachCuocUpdate[index].diemCuoc += 10;
                    state.tongTien -= 10
                }
            }
            return { ...state, danhSachCuoc: danhSachCuocUpdate }
        case "PLAY_GAME": {
            let mangXucXacNgauNhien = []
            for (let i = 0; i < 3; i++) {
                let soNgauNhien = Math.floor(Math.random() * 6)
                console.log(soNgauNhien);
                let xucXacNgauNhien = {
                    ma: state.danhSachCuoc[soNgauNhien].ma,
                    hinhAnh: state.danhSachCuoc[soNgauNhien].hinhAnh
                }
                mangXucXacNgauNhien.push(xucXacNgauNhien)
            }
            //  xử lý tăng tiền 
            mangXucXacNgauNhien.forEach((xucXac, index) => {
                let indexQuanCuoc = state.danhSachCuoc.findIndex(quanCuoc =>
                    quanCuoc.ma === xucXac.ma
                    /**
                     * đặt cua= 10
                     * random : bầu nai cua
                     */
                )
                if (indexQuanCuoc !== -1) {
                    state.tongTien += state.danhSachCuoc[indexQuanCuoc].diemCuoc
                }
            })
            //  xử lý hoàn tiền 
            state.danhSachCuoc.forEach((quanCuoc, index) => {
                let indexXucXac = mangXucXacNgauNhien.findIndex(
                    xucXacNN => xucXacNN.ma === quanCuoc.ma
                )
                if (indexXucXac !== -1) {
                    state.tongTien += quanCuoc.diemCuoc
                }
            })
            //  Reset mảng cược 
            let resetMangCuoc = state.danhSachCuoc.map((quanCuoc, index) => {
                return { ...quanCuoc, diemCuoc: 0 }

            })
            return { ...state, xucXac: mangXucXacNgauNhien, danhSachCuoc: resetMangCuoc }
        }
        default:
            return { ...state }

    }
}
export default bauCuaTomCaReducer