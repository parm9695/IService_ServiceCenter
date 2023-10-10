<template>
  <v-radio-group v-model="reqType" inline class="mt-5">
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
          hide-details
          persistent-placeholder
        />
      </v-col>
      <v-col cols="12" sm="6" lg="3">
        <v-text-field
          v-model="value.pid"
          label="เลขประจำตัวประชาชน"
          variant="outlined"
          v-mask="'#-####-#####-##-#'"
          hide-details
          persistent-placeholder
          @keyup.enter="SearchOnClick"
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
          @click="SearchOnClick"
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
          v-model="value.wordBeforeNameType"
          label="คำนำหน้านาม"
          :items="wordBeforeName"
          variant="outlined"
          hide-details
          persistent-placeholder
        />
      </v-col>
      <v-col cols="12" sm="6" lg="3">
        <p v-if="value.namePersonal">ชื่อตัว : {{ value.namePersonal }}</p>
        <v-text-field
          v-model="value.namePersonal"
          label="ชื่อตัว"
          variant="outlined"
          hide-details
          persistent-placeholder
          v-if="!value.namePersonal"
        />
      </v-col>
      <v-col cols="12" sm="6" lg="3">
        <p v-if="value.nameMiddlePersonal">
          ชื่อกลาง : {{ value.nameMiddlePersonal }}
        </p>
        <v-text-field
          v-model="value.nameMiddlePersonal"
          label="ชื่อกลาง"
          variant="outlined"
          hide-details
          persistent-placeholder
          v-if="!value.nameMiddlePersonal"
        />
      </v-col>
      <v-col cols="12" sm="6" lg="3">
        <p v-if="value.nameLastPersonal">
          ชื่อสกุล : {{ value.nameLastPersonal }}
        </p>
        <v-text-field
          v-model="value.nameMiddlePersonal"
          label="ชื่อสกุล"
          variant="outlined"
          hide-details
          persistent-placeholder
          v-if="!value.nameMiddlePersonal"
        />
      </v-col>
    </v-row>
    <!-- บุคคลธรรมดา แถว 2 -->
    <!-- บุคคลธรรมดา แถว 3 -->
    <v-row class="align-center">
      <v-col cols="12" sm="6" lg="3" align-self="center">
        <p v-if="value.birthDate">วัน/เดือน/ปีเกิด : {{ value.birthDate }}</p>
        <DatePicker
          label="วัน/เดือน/ปีเกิด"
          variant="outlined"
          v-model="value.birthDate"
          v-if="!value.birthDate"
        />
      </v-col>
      <v-col cols="12" sm="4" lg="1" v-if="value.age" align-self="center">
        <p>อายุ : {{ value.age }}</p>
      </v-col>
      <v-col cols="12" sm="2" lg="2" v-if="value.age">
        <p>ปี</p>
      </v-col>
      <v-col cols="12" sm="6" lg="3" v-if="!value.age">
        <v-text-field
          v-model="value.age"
          label="อายุ"
          variant="outlined"
          persistent-placeholder
        />
      </v-col>
      <v-col cols="12" sm="2" lg="3">
        <p v-if="value.sex">เพศ : {{ value.sex }}</p>
        <v-autocomplete
          v-model="value.sex"
          label="เพศ"
          :items="sexType"
          variant="outlined"
          persistent-placeholder
          v-if="!value.sex"
        />
      </v-col>
    </v-row>
    <!-- บุคคลธรรมดา แถว 3 -->
    <!-- บุคคลธรรมดา แถว 4 -->
    <v-row class="align-center">
      <v-col cols="12" sm="6" lg="3">
        <p v-if="value.nationality">สัญชาติ : {{ value.nationality }}</p>
        <v-text-field
          v-model="value.nationality"
          label="สัญชาติ"
          variant="outlined"
          hide-details
          persistent-placeholder
          v-if="!value.nationality"
        />
      </v-col>
      <v-col cols="12" sm="6" lg="3">
        <p v-if="value.ethnicity">เชื้อชาติ : {{ value.ethnicity }}</p>
        <v-text-field
          v-model="value.ethnicity"
          label="เชื้อชาติ"
          variant="outlined"
          hide-details
          persistent-placeholder
          v-if="!value.ethnicity"
        />
      </v-col>
      <v-col cols="12" sm="6" lg="3">
        <p v-if="value.religionSelect">ศาสนา : {{ religionSelect }}</p>
        <v-autocomplete
          v-model="value.religionSelect"
          label="ศาสนา"
          :items="religion"
          variant="outlined"
          hide-details
          persistent-placeholder
          v-if="!value.religionSelect"
        />
      </v-col>
    </v-row>
    <!-- บุคคลธรรมดา แถว 4 -->
    <!-- บุคคลธรรมดา แถว 5 -->
    <v-row class="align-center">
      <v-col cols="12" sm="6" lg="3">
        <p v-if="value.careerSelect">อาชีพ : {{ value.careerSelect }}</p>
        <v-autocomplete
          v-model="value.careerSelect"
          label="-อาชีพ-"
          :items="career"
          variant="outlined"
          hide-details
          persistent-placeholder
          v-if="!value.careerSelect"
        />
      </v-col>
      <v-col cols="12" sm="6" lg="3">
        <p v-if="value.income">รายได้ : {{ value.income }}</p>
        <v-text-field
          v-model="value.income"
          label="รายได้"
          variant="outlined"
          hide-details
          persistent-placeholder
          v-if="!value.income"
        />
      </v-col>
    </v-row>
    <!-- บุคคลธรรมดา แถว 5 -->
    <!-- บุคคลธรรมดา แถว 6 -->
    <v-row class="align-center">
      <v-col cols="12" sm="6" lg="3">
        <p v-if="value.fatherName">ชื่อบิดา : {{ value.fatherName }}</p>
        <v-text-field
          v-model="value.fatherName"
          label="ชื่อบิดา"
          variant="outlined"
          hide-details
          persistent-placeholder
          v-if="!value.fatherName"
        />
      </v-col>
      <v-col cols="12" sm="6" lg="3">
        <p v-if="value.motherName">ชื่อมารดา : {{ value.motherName }}</p>
        <v-text-field
          v-model="value.motherName"
          label="ชื่อมารดา"
          variant="outlined"
          hide-details
          persistent-placeholder
          v-if="!value.motherName"
        />
      </v-col>
    </v-row>
    <!-- บุคคลธรรมดา แถว 6 -->
    <!-- บุคคลธรรมดา แถว 7 -->
    <v-row class="align-center">
      <v-col cols="12" sm="6" lg="3">
        <p v-if="value.houseCode">เลขรหัสประจำบ้าน : {{ value.houseCode }}</p>
        <v-text-field
          v-model="value.houseCode"
          label="เลขรหัสประจำบ้าน"
          variant="outlined"
          hide-details
          persistent-placeholder
          v-if="!value.houseCode"
        />
      </v-col>
      <v-col cols="12" sm="6" lg="3">
        <p v-if="value.houseNumber">อยู่บ้านเลขที่ : {{ value.houseNumber }}</p>
        <v-text-field
          v-model="value.houseNumber"
          label="อยู่บ้านเลขที่"
          variant="outlined"
          hide-details
          persistent-placeholder
          v-if="!value.houseNumber"
        />
      </v-col>
      <v-col cols="12" sm="6" lg="3">
        <p v-if="value.moo">หมู่เลขที่ : {{ value.moo }}</p>
        <v-text-field
          v-model="value.moo"
          label="หมู่เลขที่"
          variant="outlined"
          hide-details
          persistent-placeholder
          v-if="!value.moo"
        />
      </v-col>
    </v-row>
    <!-- บุคคลธรรมดา แถว 7 -->
    <!-- บุคคลธรรมดา แถว 8 -->
    <v-row class="align-center">
      <v-col cols="12" sm="6" lg="3">
        <p v-if="value.alley">ตรอก : {{ value.alley }}</p>
        <v-text-field
          v-model="value.alley"
          label="ตรอก"
          variant="outlined"
          hide-details
          persistent-placeholder
          v-if="!value.alley"
        />
      </v-col>
      <v-col cols="12" sm="6" lg="3">
        <p v-if="value.soi">ซอย : {{ value.soi }}</p>
        <v-text-field
          v-model="value.soi"
          label="ซอย"
          variant="outlined"
          hide-details
          persistent-placeholder
          v-if="!value.soi"
        />
      </v-col>
      <v-col cols="12" sm="6" lg="3">
        <p v-if="value.street">ถนน : {{ value.street }}</p>
        <v-text-field
          v-model="value.street"
          label="ถนน"
          variant="outlined"
          hide-details
          persistent-placeholder
          v-if="!value.street"
        />
      </v-col>
    </v-row>
    <!-- บุคคลธรรมดา แถว 8 -->
    <!-- บุคคลธรรมดา แถว 9 -->
    <v-row class="align-center">
      <v-col cols="12" sm="6" lg="3">
        <p v-if="value.province">จังหวัด : {{ value.province }}</p>
        <v-text-field
          v-model="value.province"
          label="จังหวัด"
          variant="outlined"
          hide-details
          persistent-placeholder
          v-if="!value.province"
        />
      </v-col>
      <v-col cols="12" sm="6" lg="3">
        <p v-if="value.district">อำเภอ : {{ value.district }}</p>
        <v-text-field
          v-model="value.district"
          label="อำเภอ"
          variant="outlined"
          hide-details
          persistent-placeholder
          v-if="!value.district"
        />
      </v-col>
      <v-col cols="12" sm="6" lg="3">
        <p v-if="value.subDistrict">ตำบล : {{ value.subDistrict }}</p>
        <v-text-field
          v-model="value.subDistrict"
          label="ตำบล"
          variant="outlined"
          hide-details
          persistent-placeholder
          v-if="!value.subDistrict"
        />
      </v-col>
    </v-row>
    <!-- บุคคลธรรมดา แถว 9 -->
    <!-- บุคคลธรรมดา แถว 10 -->
    <v-row class="align-center">
      <v-col cols="12" sm="12" lg="">
        <p v-if="value.registry">สำนักทะเบียน : {{ value.registry }}</p>
        <v-text-field
          v-model="value.registry"
          label="สำนักทะเบียน"
          variant="outlined"
          hide-details
          persistent-placeholder
          v-if="!value.registry"
        />
      </v-col>
    </v-row>
    <!-- บุคคลธรรมดา แถว 10 -->
    <!-- บุคคลธรรมดา แถว 11 -->
    <v-row class="align-center">
      <v-col cols="12" sm="6" lg="3">
        <p v-if="value.postCode">รหัสไปรษณีย์ : {{ value.postCode }}</p>
        <v-text-field
          v-model="value.postCode"
          label="รหัสไปรษณีย์"
          variant="outlined"
          hide-details
          persistent-placeholder
          v-if="!value.postCode"
        />
      </v-col>
    </v-row>
    <!-- บุคคลธรรมดา แถว 11 -->
    <!-- บุคคลธรรมดา แถว 12 -->
    <v-row class="align-center">
      <v-col cols="12" sm="6" lg="3">
        <p v-if="value.tel">รหัสไปรษณีย์ : {{ value.tel }}</p>
        <v-text-field
          v-model="value.tel"
          label="เบอร์โทรศัพท์"
          variant="outlined"
          hide-details
          persistent-placeholder
          v-if="!value.tel"
        />
      </v-col>
      <v-col cols="12" sm="6" lg="3">
        <p v-if="value.fax">เบอร์โทรสาร : {{ value.fax }}</p>
        <v-text-field
          v-model="value.fax"
          label="เบอร์โทรสาร"
          variant="outlined"
          hide-details
          persistent-placeholder
          v-if="!value.fax"
        />
      </v-col>
      <v-col cols="12" sm="6" lg="3">
        <p v-if="value.mobilePhone">
          เบอร์โทรศัพท์เคลื่อนที่ : {{ value.mobilePhone }}
        </p>
        <v-text-field
          v-model="value.mobilePhone"
          label="เบอร์โทรศัพท์เคลื่อนที่"
          variant="outlined"
          hide-details
          persistent-placeholder
          v-if="!value.mobilePhone"
        />
      </v-col>
    </v-row>
    <!-- บุคคลธรรมดา แถว 12 -->
    <!-- บุคคลธรรมดา แถว 13 -->
    <v-row class="align-center">
      <v-col cols="12" sm="6" lg="3">
        <p v-if="value.placeIssue">สภานที่ออกบัตร : {{ value.placeIssue }}</p>
        <v-text-field
          v-model="value.placeIssue"
          label="สภานที่ออกบัตร"
          variant="outlined"
          hide-details
          persistent-placeholder
          v-if="!value.placeIssue"
        />
      </v-col>
      <v-col cols="12" sm="6" lg="3">
        <p v-if="value.districtIssue">
          สภานที่ออกบัตร : {{ value.districtIssue }}
        </p>
        <v-text-field
          v-model="value.districtIssue"
          label="อำเภอ/เขต"
          variant="outlined"
          hide-details
          persistent-placeholder
          v-if="!value.districtIssue"
        />
      </v-col>
      <v-col cols="12" sm="6" lg="3">
        <p v-if="value.provinceIssue">
          สภานที่ออกบัตร : {{ value.provinceIssue }}
        </p>
        <v-text-field
          v-model="value.provinceIssue"
          label="จังหวัด"
          variant="outlined"
          hide-details
          persistent-placeholder
          v-if="!value.provinceIssue"
        />
      </v-col>
    </v-row>
    <!-- บุคคลธรรมดา แถว 13 -->
    <!-- บุคคลธรรมดา แถว 14 -->
    <v-row class="align-center">
      <v-col cols="12" sm="6" lg="3">
        <v-autocomplete
          v-model="value.pidType"
          label="-ผู้รับมอบอำนาจ-"
          :items="attorney"
          variant="outlined"
          hide-details
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
          hide-details
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
          hide-details
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
        <p v-if="value.legalType">ประเภทนิติบุคคล : {{ value.legalType }}</p>
        <v-text-field
          v-model="value.legalType"
          label="ประเภทนิติบุคคล"
          variant="outlined"
          hide-details
          persistent-placeholder
          v-if="!value.legalType"
        />
      </v-col>
      <v-col cols="12" sm="6" lg="3">
        <p v-if="value.placeRegistration">
          สถานที่จดทะเบียน : {{ value.placeRegistration }}
        </p>
        <v-text-field
          v-model="value.placeRegistration"
          label="สถานที่จดทะเบียน"
          variant="outlined"
          hide-details
          persistent-placeholder
          v-if="!value.placeRegistration"
        />
      </v-col>
      <v-col cols="12" sm="6" lg="3">
        <p v-if="value.registrationNumber">
          ทะเบียนเลขที่ : {{ value.registrationNumber }}
        </p>
        <v-text-field
          v-model="value.registrationNumber"
          label="ทะเบียนเลขที่"
          variant="outlined"
          hide-details
          persistent-placeholder
          v-if="!value.registrationNumber"
        />
      </v-col>
    </v-row>
    <!-- นิติบุคคล แถว 2 -->
    <!-- นิติบุคคล แถว 3 -->
    <v-row>
      <v-col cols="12" sm="6" lg="3">
        <p v-if="value.dateFounded">
          วัน/เดือน/ปี ที่ก่อตั้ง : {{ value.dateFounded }}
        </p>
        <v-text-field
          v-model="value.dateFounded"
          label="วัน/เดือน/ปี ที่ก่อตั้ง"
          variant="outlined"
          hide-details
          persistent-placeholder
          v-if="!value.dateFounded"
        />
      </v-col>
    </v-row>
    <!-- นิติบุคคล แถว 3 -->
    <!-- นิติบุคคล แถว 4 -->
    <v-row>
      <v-col cols="12" sm="6" lg="3">
        <p v-if="value.houseCode">เลขรหัสประจำบ้าน : {{ value.houseCode }}</p>
        <v-text-field
          v-model="value.houseCode"
          label="เลขรหัสประจำบ้าน"
          variant="outlined"
          hide-details
          persistent-placeholder
          v-if="!value.houseCode"
        />
      </v-col>
      <v-col cols="12" sm="6" lg="3">
        <p v-if="value.houseNumber">อยู่บ้านเลขที่ : {{ value.houseNumber }}</p>
        <v-text-field
          v-model="value.houseNumber"
          label="อยู่บ้านเลขที่"
          variant="outlined"
          hide-details
          persistent-placeholder
          v-if="!value.houseNumber"
        />
      </v-col>
      <v-col cols="12" sm="6" lg="3">
        <p v-if="value.moo">หมู่ที่ : {{ value.value.moo }}</p>
        <v-text-field
          v-model="value.moo"
          label="หมู่ที่"
          variant="outlined"
          hide-details
          persistent-placeholder
          v-if="!value.moo"
        />
      </v-col>
    </v-row>
    <!-- นิติบุคคล แถว 4 -->
    <!-- นิติบุคคล แถว 5 -->
    <v-row>
      <v-col cols="12" sm="6" lg="3">
        <p v-if="value.building">อาคาร : {{ value.building }}</p>
        <v-text-field
          v-model="value.building"
          label="อาคาร"
          variant="outlined"
          hide-details
          persistent-placeholder
          v-if="!value.building"
        />
      </v-col>
      <v-col cols="12" sm="6" lg="3">
        <p v-if="value.floor">ชั้นที่ : {{ value.floor }}</p>
        <v-text-field
          v-model="value.floor"
          label="ชั้นที่"
          variant="outlined"
          hide-details
          persistent-placeholder
          v-if="!value.floor"
        />
      </v-col>
      <v-col cols="12" sm="6" lg="3">
        <p v-if="value.villageName">ชื่อหมู่บ้าน : {{ value.villageName }}</p>
        <v-text-field
          v-model="value.villageName"
          label="ชื่อหมู่บ้าน"
          variant="outlined"
          hide-details
          persistent-placeholder
          v-if="!value.villageName"
        />
      </v-col>
    </v-row>
    <!-- นิติบุคคล แถว 5 -->
    <!-- นิติบุคคล แถว 6 -->
    <v-row>
      <v-col cols="12" sm="6" lg="3">
        <p v-if="value.alley">ตรอก : {{ value.alley }}</p>
        <v-text-field
          v-model="value.alley"
          label="ตรอก"
          variant="outlined"
          hide-details
          persistent-placeholder
          v-if="!value.alley"
        />
      </v-col>
      <v-col cols="12" sm="6" lg="3">
        <p v-if="value.soi">ซอย : {{ value.soi }}</p>
        <v-text-field
          v-model="value.soi"
          label="ซอย"
          variant="outlined"
          hide-details
          persistent-placeholder
          v-if="!value.soi"
        />
      </v-col>
      <v-col cols="12" sm="6" lg="3">
        <p v-if="value.street">ถนน : {{ value.street }}</p>
        <v-text-field
          v-model="value.street"
          label="ถนน"
          variant="outlined"
          hide-details
          persistent-placeholder
          v-if="!value.street"
        />
      </v-col>
    </v-row>
    <!-- นิติบุคคล แถว 6 -->
    <!-- นิติบุคคล แถว 7 -->
    <v-row>
      <v-col cols="12" sm="6" lg="3">
        <p v-if="value.province">จังหวัด : {{ value.province }}</p>
        <v-text-field
          v-model="value.province"
          label="จังหวัด"
          variant="outlined"
          hide-details
          persistent-placeholder
          v-if="!value.province"
        />
      </v-col>
      <v-col cols="12" sm="6" lg="3">
        <p v-if="value.district">เขต/อำเภอ : {{ value.district }}</p>
        <v-text-field
          v-model="value.district"
          label="เขต/อำเภอ"
          variant="outlined"
          hide-details
          persistent-placeholder
          v-if="!value.district"
        />
      </v-col>
      <v-col cols="12" sm="6" lg="3">
        <p v-if="value.subDistrict">แขวง/ตำบล : {{ value.subDistrict }}</p>
        <v-text-field
          v-model="value.subDistrict"
          label="แขวง/ตำบล"
          variant="outlined"
          hide-details
          persistent-placeholder
          v-if="!value.subDistrict"
        />
      </v-col>
    </v-row>
    <!-- นิติบุคคล แถว 7 -->
    <!-- นิติบุคคล แถว 8 -->
    <v-row>
      <v-col cols="12" sm="6" lg="9">
        <p v-if="value.registry">สำนักทะเบียน : {{ value.registry }}</p>
        <v-text-field
          v-model="value.registry"
          label="สำนักทะเบียน"
          variant="outlined"
          hide-details
          persistent-placeholder
          v-if="!value.registry"
        />
      </v-col>
    </v-row>
    <!-- นิติบุคคล แถว 8 -->
    <!-- นิติบุคคล แถว 9 -->
    <v-row>
      <v-col cols="12" sm="6" lg="3">
        <p v-if="value.postCode">รหัสไปรษณีย์ : {{ value.postCode }}</p>
        <v-text-field
          v-model="value.postCode"
          label="รหัสไปรษณีย์"
          variant="outlined"
          hide-details
          persistent-placeholder
          v-if="!value.postCode"
        />
      </v-col>
      <v-col cols="12" sm="6" lg="3">
        <p v-if="value.tel">เบอร์โทรศัพท์ : {{ value.tel }}</p>
        <v-text-field
          v-model="value.tel"
          label="เบอร์โทรศัพท์"
          variant="outlined"
          hide-details
          persistent-placeholder
          v-if="!value.tel"
        />
      </v-col>
      <v-col cols="12" sm="6" lg="3">
        <p v-if="value.fax">เบอร์โทรสาร : {{ value.fax }}</p>
        <v-text-field
          v-model="value.fax"
          label="เบอร์โทรสาร"
          variant="outlined"
          hide-details
          persistent-placeholder
          v-if="!value.fax"
        />
      </v-col>
    </v-row>
    <!-- นิติบุคคล แถว 9 -->
    <!-- นิติบุคคล แถว 10 -->
    <v-row>
      <v-col cols="12" sm="6" lg="9">
        <p v-if="value.email">อีเมล์ : {{ value.email }}</p>
        <v-text-field
          v-model="value.email"
          label="อีเมล์"
          variant="outlined"
          hide-details
          persistent-placeholder
          v-if="!value.email"
        />
      </v-col>
    </v-row>
    <!-- นิติบุคคล แถว 10 -->
  </div>
  <!-- {{ value }} -->
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
      dataReq: {},
      dataReqInfo: {},
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
      addLegalEntity : []
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
          pid: '',
          wordBeforeName: '',
          namePersonal: '',
          nameMiddlePersonal: '',
          nameLastPersonal: '',
          birthDate: '',
          age: '',
          sex: '',
          nationality: '',
          ethnicity: '',
          religion: '',
          career: '',
          careerSelect: '',
          income: '',
          fatherName: '',
          motherName: '',
          houseCode: '',
          houseNumber: '',
          moo: '',
          alley: '',
          soi: '',
          street: '',
          province: '',
          district: '',
          subDistrict: '',
          registry: '',
          postCode: '',
          tel: '',
          fax: '',
          mobilePhone: '',
          placeIssue: '',
          provinceIssue: '',
          districtIssue: '',
          attorney: '',
          legalType: '',
          placeRegistration: '',
          registrationNumber: '',
          dateFounded: '',
          building: '',
          floor: '',
          villageName: '',
          email: '',
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
    clearMessage() {
      this.value.pid = ''
      this.value.wordBeforeNameType = ''
      this.value.namePersonal = ''
      this.value.nameMiddlePersonal = ''
      this.value.nameLastPersonal = ''
      this.value.birthDate = ''
      this.value.age = ''
      this.value.sex = ''
      this.value.nationality = ''
      this.value.ethnicity = ''
      this.value.religion = ''
      this.value.career = ''
      this.value.careerSelect = ''
      this.value.income = ''
      this.value.fatherName = ''
      this.value.motherName = ''
      this.value.houseCode = ''
      this.value.houseNumber = ''
      this.value.moo = ''
      this.value.alley = ''
      this.value.soi = ''
      this.value.street = ''
      this.value.province = ''
      this.value.district = ''
      this.value.subDistrict = ''
      this.value.registry = ''
      this.value.postCode = ''
      this.value.tel = ''
      this.value.fax = ''
      this.value.mobilePhone = ''
      this.value.placeIssue = ''
      this.value.provinceIssue = ''
      this.value.districtIssue = ''
      this.value.attorney = ''
      this.value.reqType = ''
      this.value.addLegalEntity = ''
      this.value.legalType = ''
      this.value.placeRegistration = ''
      this.value.registrationNumber = ''
      this.value.dateFounded = ''
      this.value.building = ''
      this.value.floor = ''
      this.value.villageName = ''
      this.value.email = ''
    },
    SearchOnClick() {
      this.dataReq = dataReqInfo
      console.log('dataReqInfo', dataReqInfo)
      const replacePid = this.value.pid.replaceAll('-', '')
      this.dataReq.map((item) => {
        console.log('replacePid == item.pid = ', replacePid === item.pid)
        if (replacePid === item.pid) {
          console.log('this.value.pid = ', item)
          this.value.pid = item.pid
          this.value.wordBeforeNameType = item.wordBeforeNameType
          this.value.namePersonal = item.namePersonal
          this.value.nameMiddlePersonal = item.nameMiddlePersonal
          this.value.nameLastPersonal = item.nameLastPersonal
          this.value.birthDate = item.birthDate
          this.value.age = item.age
          this.value.sex = item.sex
          this.value.nationality = item.nationality
          this.value.ethnicity = item.ethnicity
          this.value.religion = item.religion
          this.value.career = item.career
          this.value.income = item.income
          this.value.fatherName = item.fatherName
          this.value.motherName = item.motherName
          this.value.houseCode = item.houseCode
          this.value.houseNumber = item.houseNumber
          this.value.moo = item.moo
          this.value.alley = item.alley
          this.value.soi = item.soi
          this.value.street = item.street
          this.value.province = item.province
          this.value.district = item.district
          this.value.subDistrict = item.subDistrict
          this.value.registry = item.registry
          this.value.postCode = item.postCode
          this.value.tel = item.tel
          this.value.fax = item.fax
          this.value.mobilePhone = item.mobilePhone
          this.value.placeIssue = item.placeIssue
          this.value.provinceIssue = item.provinceIssue
          this.value.districtIssue = item.districtIssue
          this.value.attorney = item.attorney
          this.value.addLegalEntity = item.addLegalEntity
          this.value.legalType = item.legalType
          this.value.placeRegistration = item.placeRegistration
          this.value.registrationNumber = item.registrationNumber
          this.value.dateFounded = item.dateFounded
          this.value.building = item.building
          this.value.floor = item.floor
          this.value.villageName = item.villageName
          this.value.email = item.email

          console.log('item = ')
        }
      })
    },
  },
}
</script>
