<template>
    <v-row class="mt-5">
        <v-col cols="12" sm="6" lg="8" align-self="center">
            <v-checkbox-btn
                v-model="one" 
                hide-details="auto"
                label="สำเนาบัตรประจำตัวประชาชน และสำเนาทะเบียนบ้าน พร้อมลงลายมือชื่อ รับรองสำเนาจำนวนสองชุด"
            />
        </v-col>
        <v-col v-if="one" cols="12" sm="6" lg="2" offset-lg="1" align-self="center">
            <v-file-input
                hide-details="auto"
                variant="outlined"
                label="File input"
                
            />
        </v-col>
    </v-row>
    <v-row>
        <v-col cols="12" sm="6" lg="8" align-self="center">
            <v-checkbox-btn
                v-model="two"
                hide-details="auto"
                label="ใบรับรองแพทย์แผนปัจจุบันชั้น 1 รับรองว่าผู้ขออนุญาตมีคุณสมบัติตาม มาตรา 6(3) และ (4) จำนวนหนึ่งฉบับ"
            />
        </v-col>
        <v-col v-if="two" cols="12" sm="6" lg="2" offset-lg="1" align-self="center">
            <v-file-input
                hide-details="auto"
                variant="outlined"
                label="File input"  
            />
        </v-col>
    </v-row>
    <v-row>
        <v-col cols="12" sm="6" lg="8" align-self="center">
            <v-checkbox-btn
                v-model="three"
                hide-details="auto"
                label="แบบแปลนแผนผังแสดงพื้นที่การให้บริการของสถานบริการและปริมณฑลของสถานบริการแสดงรายละเอียดบริเวณต่างๆภายในสถานบริการ เช่น บริเวณเวที บริเวณของผู้ใช้งาน ห้องส้วม ห้องครัว ประตูทางเข้า ทางออกเป็น มาตราส่วนไม่เล็กกว่า 1 ใน 500 พร้อมทั้งคำนวณประมาณพื้นที่ที่ขออนุญาตตั้งสถานบริการ และลงลายมือชื่อรับรองจำนวนสองชุด"
            />
        </v-col>
        <v-col v-if="three" cols="12" sm="6" lg="2" offset-lg="1" align-self="center">
            <v-file-input
                hide-details="auto"
                variant="outlined"
                label="File input"  
            />
        </v-col>
    </v-row>
    <v-row>
        <v-col cols="12" sm="6" lg="8" align-self="center">
            <v-checkbox-btn
                v-model="four"
                hide-details="auto"
                label="แผนที่สังเขปแสดงบริเวณที่ตั้งสถานบริการพร้อมลงลายมือชื่อรับรอง จำนวนสองฉบับ"
            />
        </v-col>
        <v-col v-if="four" cols="12" sm="6" lg="2" offset-lg="1" align-self="center">
            <v-file-input
                hide-details="auto"
                variant="outlined"
                label="File input"  
            />
        </v-col>
    </v-row>
    <v-row>
        <v-col cols="12" sm="6" lg="8" align-self="center">
            <v-checkbox-btn
                v-model="five"
                hide-details="auto"
                label="หลักฐานที่แสดงว่าอาคารสถานที่ตั้งสถานบริการได้รับอนุญาตให้ใช้อาคารตามพระราชบัญญัติควบคุมอาคาร พ.ศ.๒๕๒๒ หรือใบรับรองการตรวจสอบสภาพอาคาร โดยผู้ซึ่งได้รับใบอนุญาตประกอบวิชาชีพวิศวกรรมควบคุม หรือผู้ซึ่งได้รับใบอนุญาตประกอบวิชาชีพสถาปัตยกรรมควบคุมตามกฎหมายว่าด้วยการนั้น"
            />
        </v-col>
        <v-col v-if="five" cols="12" sm="6" lg="2" offset-lg="1" align-self="center">
            <v-file-input
                hide-details="auto"
                variant="outlined"
                label="File input"  
            />
        </v-col>
    </v-row>
    <v-row>
        <v-col cols="12" sm="6" lg="8" align-self="center">
            <v-checkbox-btn
                v-model="six"
                hide-details="auto"
                label="รูปถ่ายของผู้ขออนุญาตตั้งสถานบริการหรือผู้แทนของนิติบุคคลผู้ขออนุญาตตั้งสถานบริการ ซึ่งต้องเป็นกรรมการหรือบุคคลผู้ มีอำนาจลงนามผูกพันนิติบุคคล หน้าตรง ไม่สวมหมวก ไม่ใส่แว่นตาสีดำ ขนาด ๔ x ๖ เซนติเมตร จำนวนสามรูป"
            />
        </v-col>
        <v-col v-if="six" cols="12" sm="6" lg="2" offset-lg="1" align-self="center">
            <v-file-input
                hide-details="auto"
                variant="outlined"
                label="File input"  
            />
        </v-col>
    </v-row>
    <v-row>
        <v-col cols="12" sm="6" lg="8" align-self="center">
            <v-checkbox-btn
                v-model="seven"
                hide-details="auto"
                label="สำเนาหนังสือรับรองการจดทะเบียนเป็นนิติบุคคล วัตถุประสงค์ และผู้มีอำนาจลงชื่อแทนนิติบุคคลผู้ขออนุญาตตั้งสถาน บริการ ไม่เกินสามเดือน จำนวนหนึ่งฉบับ"
            />
        </v-col>
        <v-col v-if="seven" cols="12" sm="6" lg="2" offset-lg="1" align-self="center">
            <v-file-input
                hide-details="auto"
                variant="outlined"
                label="File input"  
            />
        </v-col>
    </v-row>
    <v-row justify="center" class="mt-5"><p class="font-weight-bold">[ กรณีนิติบุคคลเป็นผู้ขออนุญาตตั้งสถานบริการ ]</p></v-row>
    <v-row>
        <v-col cols="12" sm="6" lg="8" align-self="center">
            <v-checkbox-btn
                v-model="eight"
                hide-details="auto"
                label="หนังสือแต่งตั้งผู้แทนนิติบุคคลซึ่งต้องเป็นกรรมการหรือบุคคลผู้มีอำนาจลงนามผูกพันนิติบุคคล"
            />
        </v-col>
        <v-col v-if="eight" cols="12" sm="6" lg="2" offset-lg="1" align-self="center">
            <v-file-input
                hide-details="auto"
                variant="outlined"
                label="File input"  
            />
        </v-col>
    </v-row>
    <v-row>
        <v-col cols="12" sm="6" lg="8" align-self="center">
            <v-checkbox-btn
                v-model="nine"
                hide-details="auto"
                label="หนังสือแสดงความยินยอมของเจ้าของอาคารหรือสถานที่ที่ตั้งสถานบริการ ในกรณีที่ผู้ขออนุญาตตั้งสถานบริการไม่ใช่เจ้าของอาคารหรือสถานที่ที่ตั้งสถานบริการจำนวนหนึ่งฉบับ"
            />
        </v-col>
        <v-col v-if="nine" cols="12" sm="6" lg="2" offset-lg="1" align-self="center">
            <v-file-input
                hide-details="auto"
                variant="outlined"
                label="File input"  
            />
        </v-col>
    </v-row>
</template>

<script>
export default {
    name: 'Entertainment-Request-ReqDocument',

    data(){
        return {
            one:false,
            two:false,
            three:false,
            four:false,
            five:false,
            six:false,
            seven:false,
            eight:false,
            nine:false,
        }
    },  
}
</script>