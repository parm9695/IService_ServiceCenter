<template>
    <v-row class="mt-5">
        <v-col cols="12" sm="6" lg="4">
            <v-text-field
                v-model="enValue.writeAddress"
                variant="outlined"
                label="เขียนที่"
                placeholder="เขียนที่"
                hide-details="auto"
                clearable
                :rules="rules"
                persistent-placeholder
            />
        </v-col>
        <v-col cols="12" sm="6" lg="4">
            <v-text-field
                v-model="enValue.officerName"
                variant="outlined"
                label="พนักงานเจ้าหน้าที่ ที่รับคำขอ"
                placeholder="พนักงานเจ้าหน้าที่ ที่รับคำขอ"
                hide-details="auto"
                clearable
                :rules="rules"
                persistent-placeholder
            />
        </v-col>
    </v-row>

    <v-row>
        <v-col cols="12" sm="6" lg="2" align-self="center">
            <P>สถานบริการตามมาตรา 3</P>
        </v-col>
        <v-col cols="12" sm="6" lg="4" align-self="center">
            <v-radio-group 
                inline 
                v-model="enValue.selection"
                hide-details="auto"
            >
                <v-radio label="(1)" value="1"/>
                <v-radio label="(2)" value="2"/>
                <v-radio label="(3)" value="3"/>
                <v-radio label="(4)" value="4"/>
                <v-radio label="(5)" value="5"/>
            </v-radio-group>
        </v-col>
    </v-row>

    <v-row>
        <v-col cols="12" sm="6" lg="4">
            <v-text-field
                v-model="enValue.enNameThai"
                variant="outlined"
                label="ชื่อสถานบริการภาษาไทย"
                placeholder="ชื่อสถานบริการภาษาไทย"
                hide-details="auto"
                clearable
                :rules="rules"
                persistent-placeholder
            />
        </v-col>
        <v-col cols="12" sm="6" lg="4">
            <v-text-field
                v-model="enValue.enNameEng"
                variant="outlined"
                label="ชื่อสถานบริการภาษาต่างประเทศ"
                placeholder="ชื่อสถานบริการภาษาต่างประเทศ"
                hide-details="auto"
                clearable
                :rules="rules"
                persistent-placeholder
            />
        </v-col>
    </v-row>

    <HeaderVue color="app-color" header="ที่ตั้งสถานบริการ" class="mt-8"/>
    
    <v-row>
        <v-col cols="12" sm="6" lg="4">
            <v-row>
                <v-col cols="12" sm="6" lg="8">
                    <v-text-field
                        v-model="enValue.enCodeNumber"
                        variant="outlined"
                        label="เลขรหัสประจำบ้าน"
                        placeholder="เลขรหัสประจำบ้าน"
                        v-mask="'####-######-#'"
                        hide-details="auto"
                        clearable
                        :rules="rules"
                        persistent-placeholder
                    />
                </v-col>
                <v-col cols="12" sm="6" lg="4" align-self="center">
                    <v-btn
                        prepend-icon="mdi-magnify"
                        variant="elevated"
                        color="primary"
                        rounded
                        size="large"
                    >
                        ค้นหา
                    </v-btn>
                </v-col>

            </v-row>
        </v-col>
        
        <v-col cols="12" sm="6" lg="8">
            <v-row>
                <v-col cols="12" sm="6" lg="4" align-self="center">
                    <v-btn
                        prepend-icon="mdi-map-marker-outline"
                        variant="elevated"
                        rounded
                        size="large"
                    >
                        พิกัดที่ตั้งในแผนที่
                    </v-btn>
                </v-col>
                <v-col cols="12" sm="6" lg="4">
                        <v-text-field
                            v-model="enValue.enLatitude"
                            variant="outlined"
                            label="ละติจูด"
                            placeholder="ละติจูด"
                            hide-details="auto"
                            clearable
                            :rules="rules"
                            persistent-placeholder
                        />
                    </v-col>
                    <v-col cols="12" sm="6" lg="4">
                        <v-text-field
                            v-model="enValue.enX"
                            variant="outlined"
                            label="X"
                            placeholder="X"
                            hide-details="auto"
                            clearable
                            :rules="rules"
                            persistent-placeholder
                        />
                    </v-col>
            </v-row>
            <v-row justify="end">
                <v-col cols="12" sm="6" lg="4">
                        <v-text-field
                            v-model="enValue.enLongitude"
                            variant="outlined"
                            label="ลองติจูด"
                            placeholder="ลองติจูด"
                            hide-details="auto"
                            clearable
                            :rules="rules"
                            persistent-placeholder
                        />
                    </v-col>
                    <v-col cols="12" sm="6" lg="4">
                        <v-text-field
                            v-model="enValue.enY"
                            variant="outlined"
                            label="ํY"
                            placeholder="Y"
                            hide-details="auto"
                            clearable
                            :rules="rules"
                            persistent-placeholder
                        />
                    </v-col>
            </v-row>
        </v-col>
    </v-row>

    <v-row>
        <v-col cols="12" sm="6" lg="2">
            <v-text-field
                v-model="enValue.enNo"
                variant="outlined"
                label="บ้านเลขที่"
                placeholder="บ้านเลขที่"
                hide-details="auto"
                clearable
                :rules="rules"
                persistent-placeholder
            />    
        </v-col>
        <v-col cols="12" sm="6" lg="2">
            <v-text-field
                v-model="enValue.enMoo"
                variant="outlined"
                label="หมู่ที่"
                placeholder="หมู่ที่"
                hide-details="auto"
                clearable
                :rules="rules"
                persistent-placeholder
            />  
        </v-col>
        <v-col cols="12" sm="6" lg="2">
            <v-text-field
                v-model="enValue.enAlley"
                variant="outlined"
                label="ตรอก"
                placeholder="ตรอก"
                hide-details="auto"
                clearable
                :rules="rules"
                persistent-placeholder
            />  
        </v-col>
        <v-col cols="12" sm="6" lg="2">
            <v-text-field
                v-model="enValue.enSoi"
                variant="outlined"
                label="ซอย"
                placeholder="ซอย"
                hide-details="auto"
                clearable
                :rules="rules"
                persistent-placeholder
            />  
        </v-col>
        <v-col cols="12" sm="6" lg="4">
            <v-text-field
                v-model="enValue.enRoad"
                variant="outlined"
                label="ถนน"
                placeholder="ถนน"
                hide-details="auto"
                clearable
                :rules="rules"
                persistent-placeholder
            />  
        </v-col>
    </v-row>
    <v-row>
        <v-col cols="12" sm="6" lg="4">
            <v-autocomplete
                v-model="enValue.enProvince"
                variant="outlined"
                label="จังหวัด"
                placeholder="---เลือกจังหวัด---"
                hide-details="auto"
                :rules="rules"
                persistent-placeholder
            />
        </v-col>
        <v-col cols="12" sm="6" lg="4">
            <v-autocomplete
                v-model="enValue.enDistrict"
                variant="outlined"
                label="อำเภอ/เขต"
                placeholder="---อำเภอ/เขต---"
                hide-details="auto"
                :rules="rules"
                persistent-placeholder
            />
        </v-col>
        <v-col cols="12" sm="6" lg="4">
            <v-autocomplete
                v-model="enValue.enSubDistrict"
                variant="outlined"
                label="ตำบล/แขวง"
                placeholder="---ตำบล/แขวง---"
                hide-details="auto"
                :rules="rules"
                persistent-placeholder
            />
        </v-col>
    </v-row>

    <v-row>
        <v-col cols="12" sm="6" lg="4">
            <v-text-field
                v-model="enValue.enPostalCode"
                variant="outlined"
                label="รหัสไปรษณีย์"
                placeholder="รหัสไปรษณีย์"
                hide-details="auto"
                :rules="rules"
                persistent-placeholder
            />
        </v-col>
        <v-col cols="12" sm="6" lg="4">
            <v-text-field
                v-model="enValue.enPhone"
                variant="outlined"
                label="หมายเลขโทรศัพท์พื้นฐาน"
                placeholder="หมายเลขโทรศัพท์พื้นฐาน"
                hide-details="auto"
                :rules="rules"
                persistent-placeholder
            />
        </v-col>
    </v-row>

    <HeaderVue color="app-color" header="พื้นที่การให้บริการ" class="mt-8"/>
    <v-row>
        <v-col cols="12" sm="6" lg="8" v-model="enValue.enLimitedArea">
            <v-radio-group inline>
                <v-radio
                    label="ในเขตอันมีปริมณฑลจำกัดเพื่อการอนุญาตให้ตั้งสถานบริการ"
                    value="1"
                />
                <v-radio
                    label="นอกเขตอันมีปริมณฑลจำกัดเพื่อการอนุญาตให้ตั้งสถานบริการ"
                    value="2"
                />
            </v-radio-group>
        </v-col>
    </v-row>
    <v-row>
        <v-col cols="12" sm="6" lg="4">
            <v-text-field
                v-model="enValue.enArea"
                variant="outlined"
                label="มีพื้นที่ให้การให้บริการจำนวน (ตารางเมตร)" 
                placeholder="มีพื้นที่ให้การให้บริการจำนวน (ตารางเมตร)"
                v-mask="'#########'"
                hide-details="auto"
                :rules="rules"
                persistent-placeholder
            />
        </v-col>
        <v-col cols="12" sm="6" lg="2">
            <v-text-field
                v-model="enValue.enRoom"
                variant="outlined"
                label="ห้อง" 
                placeholder="ห้อง"
                v-mask="'####'"
                hide-details="auto"
                :rules="rules"
                persistent-placeholder
                :disabled="enValue.selection != 3"
            />
        </v-col>
        <v-col cols="12" sm="6" lg="2">
            <v-text-field
                v-model="enValue.enBed"
                variant="outlined"
                label="เตียง" 
                placeholder="เตียง"
                v-mask="'#####'"
                hide-details="auto"
                :rules="rules"
                persistent-placeholder
                :disabled="enValue.selection != 3"
            />
        </v-col>
    </v-row>
    <v-row>
        <v-col cols="12" sm="6" lg="2" align-self="center">
            <p class="text-center">เปิดทำการได้ระหว่างเวลา</p>
        </v-col>
        <v-col cols="12" sm="6" lg="2">
            <v-text-field
                v-model="enValue.enOpenFirst"
                variant="outlined"
                label="ตั้งแต่" 
                placeholder="ตั้งแต่"
                v-mask="'##:##'"
                hide-details="auto"
                :rules="rules"
                persistent-placeholder
            />
        </v-col>
        <v-col cols="12" sm="6" lg="2">
            <v-text-field
                v-model="enValue.enCloseFirst"
                variant="outlined"
                label="ถึง" 
                placeholder="ถึง"
                v-mask="'##:##'"
                hide-details="auto"
                :rules="rules"
                persistent-placeholder
            />      
        </v-col>
        <v-col cols="12" sm="6" lg="2" align-self="center">
            <p class="text-center">และระหว่างเวลา</p>
        </v-col>
        <v-col cols="12" sm="6" lg="2">
            <v-text-field
                v-model="enValue.enOpenSecond"
                variant="outlined"
                label="ตั้งแต่" 
                placeholder="ตั้งแต่"
                v-mask="'##:##'"
                hide-details="auto"
                :rules="rules"
                persistent-placeholder
            />
        </v-col>
        <v-col cols="12" sm="6" lg="2">
            <v-text-field
                v-model="enValue.enCloseSecond"
                variant="outlined"
                label="ถึง" 
                placeholder="ถึง"
                v-mask="'##:##'"
                hide-details="auto"
                :rules="rules"
                persistent-placeholder
            />      
        </v-col>
    </v-row>
    
</template>

<script>
import HeaderVue from '@/components/Header.vue'
import { reactive } from 'vue'

export default {
    name: 'Entertainment-Request-ReqDetails',

    components: {
        HeaderVue,
    },

    data: () => ({
        rules:[
            // value => {
            //     if (value) return true
            //     return 'You must Fill'
            // }
        ],
    }),

    props: {
        modelValue: {
            type: Object,
            default: () => {
                return {
                    writeAddress:'',
                    officerName:'',
                    selection:'',
                    enNameThai:'',
                    enNameEng:'',
                    enCodeNumber:'',
                    enLatitude:'',
                    enLongitude:'',
                    enX:'',
                    enY:'',
                    enNo:'',
                    enMoo:'',
                    enAlley:'',
                    enSoi:'',
                    enRoad:'',
                    enProvince:'',
                    enDistrict:'',
                    enSubDistrict:'',
                    enPostalCode:'',
                    enPhone:'',
                    enLimitedArea:'',
                    enArea:'',
                    enRoom:'',
                    enBed:'',
                    enOpenFirst:'',
                    enCloseFirst:'',
                    enOpenSecond:'',
                    enCloseSecond:'',
                }
            }
        }
    },

    setup(props){
        const enValue = reactive(props.modelValue)
        return {
            enValue,
        }
    }

}
</script>