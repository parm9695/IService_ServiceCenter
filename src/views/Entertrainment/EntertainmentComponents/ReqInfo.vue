<template>
  <v-radio-group v-model="reqType" inline>
    <v-radio label="บุคคลธรรมดา" value="บุคคลธรรมดา"></v-radio>
    <v-radio label="นิติบุคคล" value="นิติบุคคล"></v-radio>
  </v-radio-group>
  <!-- <div v-if="reqType = 'บุคคลธรรมดา'"> -->
  <div v-if="reqType === 'บุคคลธรรมดา'">
    <!-- บุคคลธรรมดา แถว 1 -->

    <v-row class="mt-1">
      <v-col cols="12" sm="6" lg="3">
        <v-autocomplete
          v-model="pidType"
          label="-เลือกประเภทกรอกข้อมูล-"
          :items="SelectPid"
          variant="outlined"
          hide-details="auto"
          persistent-placeholder
        />
      </v-col>
      <v-col cols="12" sm="6" lg="3">
        <v-text-field
          v-model="pid"
          label="เลขประจำตัวประชาชน"
          variant="outlined"
          v-mask="'#-####-#####-##-#'"
          hide-details="auto"
          persistent-placeholder
          @keyup.enter="onClick"
          clearable
          append-inner-icon="mdi-magnify"
          @click:append-inner="SearchOnClick"
          @click:clear="clearMessage"
          :disabled="
            pidType == 'อ่านบัตรประจำตัวประชาชน' || pidType == undefined
          "
        />
      </v-col>
      <v-col cols="12" sm="2" lg="1">
        <v-btn
          color="primary"
          rounded
          variant="outlined"
          size="large"
          @click="clickOk"
        >
          ค้นหา
        </v-btn>
      </v-col>
    </v-row>
    <!-- บุคคลธรรมดา แถว 1-->
    <!-- บุคคลธรรมดา แถว 2 -->
    <v-row class="align-center">
      <v-col cols="12" sm="6" lg="3">
        <v-autocomplete
          v-model="pidType"
          label="คำนำหน้านาม"
          :items="wordBeforeName"
          variant="outlined"
          hide-details="auto"
          persistent-placeholder
        />
      </v-col>
      <v-col cols="12" sm="6" lg="3">
        <p v-if="namePersonal">ชื่อตัว : {{ namePersonal }}</p>
        <v-text-field
          v-model="value.namePersonal"
          label="ชื่อตัว"
          variant="outlined"
          hide-details="auto"
          persistent-placeholder
          v-if="!namePersonal"
        />
      </v-col>
      <v-col cols="12" sm="6" lg="3">
        <p v-if="nameMiddlePersonal">ชื่อกลาง : {{ nameMiddlePersonal }}</p>
        <v-text-field
          v-model="value.nameMiddlePersonal"
          label="ชื่อกลาง"
          variant="outlined"
          hide-details="auto"
          persistent-placeholder
          v-if="!nameMiddlePersonal"
        />
      </v-col>
      <v-col cols="12" sm="6" lg="3">
        <p v-if="nameLastPersonal">ชื่อสกุล : {{ nameLastPersonal }}</p>
        <v-text-field
          v-model="value.nameMiddlePersonal"
          label="ชื่อสกุล"
          variant="outlined"
          hide-details="auto"
          persistent-placeholder
          v-if="!nameMiddlePersonal"
        />
      </v-col>
    </v-row>
    <!-- บุคคลธรรมดา แถว 2 -->
    <!-- บุคคลธรรมดา แถว 3 -->
    <v-row class="align-center">
      <v-col cols="12" sm="6" lg="3" align-self="center">
        <p v-if="birthDate">วัน/เดือน/ปีเกิด : {{ birthDate }}</p>
           <DatePicker
          label="วัน/เดือน/ปีเกิด"
          variant="outlined"
          v-model="birthDate"
          v-if="!birthDate"
         
        />
       
      </v-col>
      <v-col cols="12" sm="4" lg="1" v-if="age" align-self="center">
        <p>อายุ : {{ age }}</p>
      </v-col>
      <v-col cols="12" sm="2" lg="2" v-if="age">
        <p>ปี</p>
      </v-col>
      <v-col cols="12" sm="6" lg="3" v-if="!age">
        <v-text-field
          v-model="value.age"
          label="อายุ"
          variant="outlined"
          persistent-placeholder
        />
      </v-col>
      <v-col cols="12" sm="2" lg="3">
        <p v-if="sex">เพศ : {{ sex }}</p>
        <v-autocomplete
          v-model="sex"
          label="เพศ"
          :items="sexType"
          variant="outlined"
          persistent-placeholder
          v-if="!sex"
        />
      </v-col>
    </v-row>
    <!-- บุคคลธรรมดา แถว 3 -->
    <!-- บุคคลธรรมดา แถว 4 -->
    <v-row class="align-center">
      <v-col cols="12" sm="6" lg="3">
        <p v-if="nationality">สัญชาติ : {{ nationality }}</p>
        <v-text-field
          v-model="value.nationality"
          label="สัญชาติ"
          variant="outlined"
          hide-details="auto"
          persistent-placeholder
          v-if="!nationality"
        />
      </v-col>
      <v-col cols="12" sm="6" lg="3">
        <p v-if="ethnicity">เชื้อชาติ : {{ ethnicity }}</p>
        <v-text-field
          v-model="value.ethnicity"
          label="เชื้อชาติ"
          variant="outlined"
          hide-details="auto"
          persistent-placeholder
          v-if="!ethnicity"
        />
      </v-col>
      <v-col cols="12" sm="6" lg="3">
        <p v-if="religionSelect">ศาสนา : {{ religionSelect }}</p>
        <v-autocomplete
          v-model="religionSelect"
          label="ศาสนา"
          :items="religion"
          variant="outlined"
          hide-details="auto"
          persistent-placeholder
          v-if="!religionSelect"
        />
      </v-col>
    </v-row>
    <!-- บุคคลธรรมดา แถว 4 -->
    <!-- บุคคลธรรมดา แถว 5 -->
    <v-row class="align-center">
      <v-col cols="12" sm="6" lg="3">
        <p v-if="careerSelect">อาชีพ : {{ careerSelect }}</p>
        <v-autocomplete
          v-model="careerSelect"
          label="-อาชีพ-"
          :items="career"
          variant="outlined"
          hide-details="auto"
          persistent-placeholder
          v-if="!careerSelect"
        />
      </v-col>
      <v-col cols="12" sm="6" lg="3">
        <p v-if="income">รายได้ : {{ income }}</p>
        <v-text-field
          v-model="value.income"
          label="รายได้"
          variant="outlined"
          hide-details="auto"
          persistent-placeholder
          v-if="!income"
        />
      </v-col>
    </v-row>
    <!-- บุคคลธรรมดา แถว 5 -->
    <!-- บุคคลธรรมดา แถว 6 -->
    <v-row class="align-center">
      <v-col cols="12" sm="6" lg="3">
        <p v-if="fatherName">ชื่อบิดา : {{ fatherName }}</p>
        <v-text-field
          v-model="value.fatherName"
          label="ชื่อบิดา"
          variant="outlined"
          hide-details="auto"
          persistent-placeholder
          v-if="!fatherName"
        />
      </v-col>
      <v-col cols="12" sm="6" lg="3">
        <p v-if="motherName">ชื่อมารดา : {{ motherName }}</p>
        <v-text-field
          v-model="value.motherName"
          label="ชื่อมารดา"
          variant="outlined"
          hide-details="auto"
          persistent-placeholder
          v-if="!motherName"
        />
      </v-col>
    </v-row>
    <!-- บุคคลธรรมดา แถว 6 -->
    <!-- บุคคลธรรมดา แถว 7 -->
    <v-row class="align-center">
      <v-col cols="12" sm="6" lg="3">
        <p v-if="houseCode">เลขรหัสประจำบ้าน : {{ houseCode }}</p>
        <v-text-field
          v-model="value.houseCode"
          label="เลขรหัสประจำบ้าน"
          variant="outlined"
          hide-details="auto"
          persistent-placeholder
          v-if="!houseCode"
        />
      </v-col>
      <v-col cols="12" sm="6" lg="3">
        <p v-if="houseNumber">อยู่บ้านเลขที่ : {{ houseNumber }}</p>
        <v-text-field
          v-model="value.houseNumber"
          label="อยู่บ้านเลขที่"
          variant="outlined"
          hide-details="auto"
          persistent-placeholder
          v-if="!houseNumber"
        />
      </v-col>
      <v-col cols="12" sm="6" lg="3">
        <p v-if="moo">หมู่เลขที่ : {{ moo }}</p>
        <v-text-field
          v-model="value.moo"
          label="หมู่เลขที่"
          variant="outlined"
          hide-details="auto"
          persistent-placeholder
          v-if="!moo"
        />
      </v-col>
    </v-row>
    <!-- บุคคลธรรมดา แถว 7 -->
    <!-- บุคคลธรรมดา แถว 8 -->
    <v-row class="align-center">
      <v-col cols="12" sm="6" lg="3">
        <p v-if="alley">ตรอก : {{ alley }}</p>
        <v-text-field
          v-model="value.alley"
          label="ตรอก"
          variant="outlined"
          hide-details="auto"
          persistent-placeholder
          v-if="!alley"
        />
      </v-col>
      <v-col cols="12" sm="6" lg="3">
        <p v-if="soi">ซอย : {{ soi }}</p>
        <v-text-field
          v-model="value.soi"
          label="ซอย"
          variant="outlined"
          hide-details="auto"
          persistent-placeholder
          v-if="!soi"
        />
      </v-col>
      <v-col cols="12" sm="6" lg="3">
        <p  v-if="street">ถนน : {{ street }}</p>
        <v-text-field
          v-model="value.street"
          label="ถนน"
          variant="outlined"
          hide-details="auto"
          persistent-placeholder
          v-if="!street"
        />
      </v-col>
    </v-row>
    <!-- บุคคลธรรมดา แถว 8 -->
    <!-- บุคคลธรรมดา แถว 9 -->
    <v-row class="align-center">
      <v-col cols="12" sm="6" lg="3">
        <p v-if="province">จังหวัด : {{ province }}</p>
        <v-text-field
          v-model="value.province"
          label="จังหวัด"
          variant="outlined"
          hide-details="auto"
          persistent-placeholder
          v-if="!province"
        />
      </v-col>
      <v-col cols="12" sm="6" lg="3">
        <p v-if="district">อำเภอ : {{ district }}</p>
        <v-text-field
          v-model="value.district"
          label="อำเภอ"
          variant="outlined"
          hide-details="auto"
          persistent-placeholder
          v-if="!district"
        />
      </v-col>
      <v-col cols="12" sm="6" lg="3">
        <p v-if="subDistrict">ตำบล : {{ subDistrict }}</p>
        <v-text-field
          v-model="value.subDistrict"
          label="ตำบล"
          variant="outlined"
          hide-details="auto"
          persistent-placeholder
          v-if="!subDistrict"
        />
      </v-col>
    </v-row>
    <!-- บุคคลธรรมดา แถว 9 -->
    <!-- บุคคลธรรมดา แถว 10 -->
    <v-row class="align-center">
      <v-col cols="12" sm="12" lg="">
        <p v-if="registry">สำนักทะเบียน : {{ registry }}</p>
        <v-text-field
          v-model="value.registry"
          label="สำนักทะเบียน"
          variant="outlined"
          hide-details="auto"
          persistent-placeholder
          v-if="!registry"
        />
      </v-col>
    </v-row>
    <!-- บุคคลธรรมดา แถว 10 -->
    <!-- บุคคลธรรมดา แถว 11 -->
    <v-row class="align-center">
      <v-col cols="12" sm="6" lg="3">
        <p v-if="postCode">รหัสไปรษณีย์ : {{ postCode }}</p>
        <v-text-field
          v-model="value.postCode"
          label="รหัสไปรษณีย์"
          variant="outlined"
          hide-details="auto"
          persistent-placeholder
          v-if="!postCode"
        />
      </v-col>
    </v-row>
    <!-- บุคคลธรรมดา แถว 11 -->
    <!-- บุคคลธรรมดา แถว 12 -->
    <v-row class="align-center">
      <v-col cols="12" sm="6" lg="3">
        <p v-if="tel">รหัสไปรษณีย์ : {{ tel }}</p>
        <v-text-field
          v-model="value.tel"
          label="เบอร์โทรศัพท์"
          variant="outlined"
          hide-details="auto"
          persistent-placeholder
          v-if="!tel"
        />
      </v-col>
      <v-col cols="12" sm="6" lg="3">
        <p v-if="fax">เบอร์โทรสาร : {{ fax }}</p>
        <v-text-field
          v-model="value.fax"
          label="เบอร์โทรสาร"
          variant="outlined"
          hide-details="auto"
          persistent-placeholder
          v-if="!fax"
        />
      </v-col>
      <v-col cols="12" sm="6" lg="3">
        <p v-if="mobilePhone">เบอร์โทรศัพท์เคลื่อนที่ : {{ mobilePhone }}</p>
        <v-text-field
          v-model="value.mobilePhone"
          label="เบอร์โทรศัพท์เคลื่อนที่"
          variant="outlined"
          hide-details="auto"
          persistent-placeholder
          v-if="!mobilePhone"
        />
      </v-col>
    </v-row>
    <!-- บุคคลธรรมดา แถว 12 -->
    <!-- บุคคลธรรมดา แถว 13 -->
    <v-row class="align-center">
      <v-col cols="12" sm="6" lg="3">
        <p v-if="placeIssue">สภานที่ออกบัตร : {{ placeIssue }}</p>
        <v-text-field
          v-model="value.placeIssue"
          label="สภานที่ออกบัตร"
          variant="outlined"
          hide-details="auto"
          persistent-placeholder
          v-if="!placeIssue"
        />
      </v-col>
      <v-col cols="12" sm="6" lg="3">
        <p v-if="districtIssue">สภานที่ออกบัตร : {{ districtIssue }}</p>
        <v-text-field
          v-model="value.districtIssue"
          label="อำเภอ/เขต"
          variant="outlined"
          hide-details="auto"
          persistent-placeholder
          v-if="!districtIssue"
        />
      </v-col>
      <v-col cols="12" sm="6" lg="3">
        <p v-if="provinceIssue">สภานที่ออกบัตร : {{ provinceIssue }}</p>
        <v-text-field
          v-model="value.provinceIssue"
          label="จังหวัด"
          variant="outlined"
          hide-details="auto"
          persistent-placeholder
          v-if="!provinceIssue"
        />
      </v-col>
    </v-row>
    <!-- บุคคลธรรมดา แถว 13 -->
    <!-- บุคคลธรรมดา แถว 14 -->
    <v-row class="align-center">
      <v-col cols="12" sm="6" lg="3">
        <v-autocomplete
          v-model="pidType"
          label="-ผู้รับมอบอำนาจ-"
          :items="attorney"
          variant="outlined"
          hide-details="auto"
          persistent-placeholder
        />
      </v-col>
    </v-row>
    <!-- บุคคลธรรมดา แถว 14 -->
  </div>
  <div v-if="reqType === 'นิติบุคคล'">



    <!-- นิติบุคคล แถว 1 -->
    <v-row>
      <v-col cols="12" sm="6" lg="3">
        <v-text-field
          v-model="value.pid"
          label="เลขทะเบียนนิติบุคคล"
          variant="outlined"
          v-mask="'####################'"
          hide-details="auto"
          persistent-placeholder
          @keyup.enter="onClick"
          clearable
          append-inner-icon="mdi-magnify"
          @click:append-inner="onClick"
          @click:clear="clearMessage"
        />
      </v-col>
      
      <v-col cols="12" sm="6" lg="3">
        <v-autocomplete
          v-model="addLegalEntity"
          label=" "
          :items="attorney"
          variant="outlined"
          hide-details="auto"
          persistent-placeholder
        />
      </v-col>
      <v-col cols="12" sm="2" lg="1">
        <v-btn
          color="primary"
          rounded
          variant="outlined"
          size="large"
          @click="clickOk"
        >
          ค้นหา
        </v-btn>
      </v-col>
      <v-col cols="12" sm="3" lg="3">
        <v-btn
          color="primary"
          rounded
          variant="outlined"
          size="large"
          @click="clickOk"
        >
          เพิ่มนิติบุคคล
        </v-btn>
      </v-col>
    </v-row>
    <!-- นิติบุคคล แถว 1 -->
     <!-- นิติบุคคล แถว 2 -->
     <v-row>
      <v-col cols="12" sm="6" lg="3">
        <p v-if="legalType">ประเภทนิติบุคคล : {{ legalType }}</p>
        <v-text-field
          v-model="value.legalType"
          label="ประเภทนิติบุคคล"
          variant="outlined"
          hide-details="auto"
          persistent-placeholder
          v-if="!legalType"
        />
      </v-col>
      <v-col cols="12" sm="6" lg="3">
        <p v-if="placeRegistration">สถานที่จดทะเบียน : {{ placeRegistration }}</p>
        <v-text-field
          v-model="value.placeRegistration"
          label="สถานที่จดทะเบียน"
          variant="outlined"
          hide-details="auto"
          persistent-placeholder
          v-if="!placeRegistration"
        />
      </v-col>
      <v-col cols="12" sm="6" lg="3">
        <p v-if="registrationNumber">ทะเบียนเลขที่ : {{ registrationNumber }}</p>
        <v-text-field
          v-model="value.registrationNumber"
          label="ทะเบียนเลขที่"
          variant="outlined"
          hide-details="auto"
          persistent-placeholder
          v-if="!registrationNumber"
        />
      </v-col>
    </v-row>
    <!-- นิติบุคคล แถว 2 -->
    <!-- นิติบุคคล แถว 3 -->
    <v-row>
      <v-col cols="12" sm="6" lg="3">
        <p v-if="dateFounded">วัน/เดือน/ปี ที่ก่อตั้ง : {{ dateFounded }}</p>
        <v-text-field
          v-model="value.dateFounded"
          label="วัน/เดือน/ปี ที่ก่อตั้ง"
          variant="outlined"
          hide-details="auto"
          persistent-placeholder
          v-if="!dateFounded"
        />
      </v-col>
    </v-row>
    <!-- นิติบุคคล แถว 3 -->
    <!-- นิติบุคคล แถว 4 -->
    <v-row>
      <v-col cols="12" sm="6" lg="3">
        <p v-if="houseCode">เลขรหัสประจำบ้าน : {{ houseCode }}</p>
        <v-text-field
          v-model="value.houseCode"
          label="เลขรหัสประจำบ้าน"
          variant="outlined"
          hide-details="auto"
          persistent-placeholder
          v-if="!houseCode"
        />
      </v-col>
      <v-col cols="12" sm="6" lg="3">
        <p v-if="houseNumber">อยู่บ้านเลขที่ : {{ houseNumber }}</p>
        <v-text-field
          v-model="value.houseNumber"
          label="อยู่บ้านเลขที่"
          variant="outlined"
          hide-details="auto"
          persistent-placeholder
          v-if="!houseNumber"
        />
      </v-col>
      <v-col cols="12" sm="6" lg="3">
        <p v-if="moo">หมู่ที่ : {{ moo }}</p>
        <v-text-field
          v-model="value.moo"
          label="หมู่ที่"
          variant="outlined"
          hide-details="auto"
          persistent-placeholder
          v-if="!moo"
        />
      </v-col>
    </v-row>
    <!-- นิติบุคคล แถว 4 -->
     <!-- นิติบุคคล แถว 5 -->
     <v-row>
      <v-col cols="12" sm="6" lg="3">
        <p v-if="building">อาคาร : {{ building }}</p>
        <v-text-field
          v-model="value.building"
          label="อาคาร"
          variant="outlined"
          hide-details="auto"
          persistent-placeholder
          v-if="!building"
        />
      </v-col>
      <v-col cols="12" sm="6" lg="3">
        <p v-if="floor">ชั้นที่ : {{ floor }}</p>
        <v-text-field
          v-model="value.floor"
          label="ชั้นที่"
          variant="outlined"
          hide-details="auto"
          persistent-placeholder
          v-if="!floor"
        />
      </v-col>
      <v-col cols="12" sm="6" lg="3">
        <p v-if="villageName">ชื่อหมู่บ้าน : {{ villageName }}</p>
        <v-text-field
          v-model="value.villageName"
          label="ชื่อหมู่บ้าน"
          variant="outlined"
          hide-details="auto"
          persistent-placeholder
          v-if="!villageName"
        />
      </v-col>
    </v-row>
    <!-- นิติบุคคล แถว 5 -->
     <!-- นิติบุคคล แถว 6 -->
     <v-row>
      <v-col cols="12" sm="6" lg="3">
        <p v-if="alley">ตรอก : {{ alley }}</p>
        <v-text-field
          v-model="value.alley"
          label="ตรอก"
          variant="outlined"
          hide-details="auto"
          persistent-placeholder
          v-if="!alley"
        />
      </v-col>
      <v-col cols="12" sm="6" lg="3">
        <p v-if="soi">ซอย : {{ soi }}</p>
        <v-text-field
          v-model="value.soi"
          label="ซอย"
          variant="outlined"
          hide-details="auto"
          persistent-placeholder
          v-if="!soi"
        />
      </v-col>
      <v-col cols="12" sm="6" lg="3">
        <p v-if="street">ถนน : {{ street }}</p>
        <v-text-field
          v-model="value.street"
          label="ถนน"
          variant="outlined"
          hide-details="auto"
          persistent-placeholder
          v-if="!street"
        />
      </v-col>
    </v-row>
    <!-- นิติบุคคล แถว 6 -->
    <!-- นิติบุคคล แถว 7 -->
    <v-row>
      <v-col cols="12" sm="6" lg="3">
        <p v-if="province">จังหวัด : {{ province }}</p>
        <v-text-field
          v-model="value.province"
          label="จังหวัด"
          variant="outlined"
          hide-details="auto"
          persistent-placeholder
          v-if="!province"
        />
      </v-col>
      <v-col cols="12" sm="6" lg="3">
        <p v-if="district">เขต/อำเภอ : {{ district }}</p>
        <v-text-field
          v-model="value.district"
          label="เขต/อำเภอ"
          variant="outlined"
          hide-details="auto"
          persistent-placeholder
          v-if="!district"
        />
      </v-col>
      <v-col cols="12" sm="6" lg="3">
        <p v-if="subDistrict">แขวง/ตำบล : {{ subDistrict }}</p>
        <v-text-field
          v-model="value.subDistrict"
          label="แขวง/ตำบล"
          variant="outlined"
          hide-details="auto"
          persistent-placeholder
          v-if="!subDistrict"
        />
      </v-col>
    </v-row>
    <!-- นิติบุคคล แถว 7 -->
      <!-- นิติบุคคล แถว 8 -->
      <v-row>
      <v-col cols="12" sm="6" lg="9">
        <p v-if="registry">สำนักทะเบียน : {{ registry }}</p>
        <v-text-field
          v-model="value.registry"
          label="สำนักทะเบียน"
          variant="outlined"
          hide-details="auto"
          persistent-placeholder
          v-if="!registry"
        />
      </v-col>
     
    </v-row>
    <!-- นิติบุคคล แถว 8 -->
    <!-- นิติบุคคล แถว 9 -->
    <v-row>
      <v-col cols="12" sm="6" lg="3">
        <p v-if="postCode">รหัสไปรษณีย์ : {{ postCode }}</p>
        <v-text-field
          v-model="value.postCode"
          label="รหัสไปรษณีย์"
          variant="outlined"
          hide-details="auto"
          persistent-placeholder
          v-if="!postCode"
        />
      </v-col>
      <v-col cols="12" sm="6" lg="3">
        <p v-if="postCode">เบอร์โทรศัพท์ : {{ tel }}</p>
        <v-text-field
          v-model="value.tel"
          label="เบอร์โทรศัพท์"
          variant="outlined"
          hide-details="auto"
          persistent-placeholder
          v-if="!tel"
        />
      </v-col>
      <v-col cols="12" sm="6" lg="3">
        <p v-if="postCode">เบอร์โทรสาร : {{ fax }}</p>
        <v-text-field
          v-model="value.fax"
          label="เบอร์โทรสาร"
          variant="outlined"
          hide-details="auto"
          persistent-placeholder
          v-if="!fax"
        />
      </v-col>
    </v-row>
    <!-- นิติบุคคล แถว 9 -->
    <!-- นิติบุคคล แถว 10 -->
    <v-row>
      <v-col cols="12" sm="6" lg="9">
        <p v-if="email">อีเมล์ : {{ email }}</p>
        <v-text-field
          v-model="value.email"
          label="อีเมล์"
          variant="outlined"
          hide-details="auto"
          persistent-placeholder
          v-if="!email"
        />
      </v-col>
     
    </v-row>
    <!-- นิติบุคคล แถว 10 -->
    
  </div>
  {{ dataReqInfo }}
</template>

<script>
import { reactive } from 'vue'
import HeaderVue from '@/components/Header.vue'
import { pidCalculate } from '@/helpers/pidCalculate'
import dataReqInfo from '../../../store/mockData/DataReqInfo.js'
export default {
  name: 'Personal-Request-General',
  data() {
    return {
      dataReq :{},
      pid: '',
      reqType: null,
      pidType: undefined,
      namePersonal: '',
      nameMiddlePersonal: '',
      nameLastPersonal: '',
      SelectPid: ['เลขประจำตัวประชาชน', 'อ่านบัตรประจำตัวประชาชน'],
      wordBeforeName: ['นาย', 'นาง', 'นางสาว'],
      attorney: ['มารดา', 'บิดา', 'ญาติ'],
      religion: [
        'พุทธ',
        'คริสต์',
        'อิสลาม',
        'ฮินดู',
        'ซิกข์',
        'ไม่นับถือศาสนา',
      ],
      career: [
        'เกษตรกร',
        'ค้าขาย',
        'รับราชการ',
        'นักเรียน',
        'นักศึกษา',
        'อื่นๆ',
      ],
      sexType: ['ชาย', 'หญิง'],
    }
  },
  components: {
    HeaderVue,
  },

  props: {
    modelValue: {
      type: Object,
      default: () => {
        return {
         
        }
      },
    },
    readonly: {
      type: Boolean,
      default: true,
    },
  },
  setup(props) {
    const value = reactive(props.modelValue)
    return {
      value,
    }
  },
  methods: {
    onClick() {
      const replacePid = this.value.pid.replace(/-/g, '')
      // this.value.pid != null ||
      if (pidCalculate(this.value.pid)) {
        dataCrime.map((item) => {
          console.log('item.pid', item.Pid)
        })
      } else {
        console.log('error')
        // this.error("เกิดข้อผิดพลาด","กรุณากรอกเลขบัตรประชาชนให้ถูกต้อง")
      }
      console.log('dataCrimePersonal')
    },
    SearchOnClick() {
      this.dataReq = dataReqInfo
      console.log('dataReqInfo', dataReqInfo);
      dataReqInfo.map((item) => {
        if(pid === item.pid){
          this.dataReq = item
        }
      })
    },
  },
}
</script>
