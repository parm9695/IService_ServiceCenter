<template>
	<div>
		<HeaderVue
		color="app-color"
		header="ขอย้ายที่ตั้งสถานบริการ"
		class="mt-8"
		/>
		<v-row>
		<v-col cols="12" sm="6" lg="4">
			<v-text-field
			v-model="enChange.enChangeCodeNumber"
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
		<v-col cols="12" sm="6" lg="2" align-self="center">
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
		<v-row>
		<v-col cols="12" sm="6" lg="2">
			<v-text-field
			v-model="enChange.enChangeNo"
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
			v-model="enChange.enChangeMoo"
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
			v-model="enChange.enChangeAlley"
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
			v-model="enChange.enChangeSoi"
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
			v-model="enChange.enChangeRoad"
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
			v-model="enChange.enChangeProvince"
			variant="outlined"
			label="จังหวัด"
			placeholder="จังหวัด"
			hide-details="auto"
			:rules="rules"
			persistent-placeholder
			/>
		</v-col>
		<v-col cols="12" sm="6" lg="4">
			<v-autocomplete
			v-model="enChange.enChangeDistrict"
			variant="outlined"
			label="อำเภอ/เขต"
			placeholder="อำเภอ/เขต"
			hide-details="auto"
			:rules="rules"
			persistent-placeholder
			/>
		</v-col>
		<v-col cols="12" sm="6" lg="4">
			<v-autocomplete
			v-model="enChange.enChangeSubDistrict"
			variant="outlined"
			label="ตำบล/แขวง"
			placeholder="ตำบล/แขวง"
			hide-details="auto"
			:rules="rules"
			persistent-placeholder
			/>
		</v-col>
		</v-row>

		<v-row>
		<v-col cols="12" sm="6" lg="4">
			<v-text-field
			v-model="enChange.enChangePostalCode"
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
			v-model="enChange.enChangePhone"
			variant="outlined"
			label="หมายเลขโทรศัพท์พื้นฐาน"
			placeholder="หมายเลขโทรศัพท์พื้นฐาน"
			hide-details="auto"
			:rules="rules"
			persistent-placeholder
			/>
		</v-col>
		</v-row>
	</div>

	<div>
		<HeaderVue
		color="app-color"
		header="ขอเปลี่ยนชื่อสถานบริการ"
		class="mt-8"
		/>
		<v-row>
			<v-col cols="12" sm="6" lg="4">
				<v-text-field
					v-model="enChange.enChangeNameThai"
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
					v-model="enChange.enChangeNameEng"
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
	</div>

	<div>
		<HeaderVue
		color="app-color"
		header="ปรับปรุงพื้นที่การให้บริการ"
		class="mt-8"
		/>
		<v-row>
			<v-col cols="12" sm="6" lg="2" align-self="center">
				<p>มีพื้นที่ให้การให้บริการจำนวน</p>
			</v-col>
			<v-col cols="12" sm="6" lg="2">
				<v-text-field
					v-model="enChange.enAddArea"
					variant="outlined"
					label="ตารางเมตร"
					placeholder="ตารางเมตร"
					v-mask="'#########'"
					hide-details="auto"
					:rules="rules"
					persistent-placeholder
				/>
			</v-col>
			<v-col cols="12" sm="6" lg="2">
				<v-text-field
					v-model="enChange.enAddRoom"
					variant="outlined"
					label="ห้อง"
					placeholder="ห้อง"
					v-mask="'####'"
					hide-details="auto"
					:rules="rules"
					persistent-placeholder
				/>
			</v-col>
			<v-col cols="12" sm="6" lg="2">
				<v-text-field
					v-model="enChange.enAddBed"
					variant="outlined"
					label="เตียง"
					placeholder="เตียง"
					v-mask="'#####'"
					hide-details="auto"
					:rules="rules"
					persistent-placeholder
				/>
			</v-col>
		</v-row>
	</div>

	<div>
		<HeaderVue
		color="app-color"
		header="ขอยกเลิกกิจการ"
		class="mt-8"
		/>
		<v-col cols="12" sm="6" lg="4">
			<v-text-field
			v-model="enChange.enDissolution"
				variant="outlined"
				label="วันที่ยกเลิกกิจการ"
				placeholder="วันที่ยกเลิกกิจการ"
				v-mask="'##/##/####'"
				hide-details="auto"
				clearable
				:rules="rules"
				persistent-placeholder
			/>
		</v-col>
	</div>

	<div>
		<HeaderVue
		color="app-color"
		header="เปลี่ยนผู้แทนนิติบุคคล"
		class="mt-8"
		/>
		<v-table>
			<thead>
				<tr>
					<th>1</th>
					<th>2</th>
				</tr>
			</thead>
			<thead>
				<tr>
					<th>1</th>
					<th>2</th>
					<th>1</th>
					<th>2</th>
				</tr>
			</thead>
		</v-table>
	</div>
</template>

	<script>
	import HeaderVue from '@/components/Header.vue'
	import { reactive } from 'vue'

	export default {
	name: 'Entertainment-Request-ReqChange',

	components: {
		HeaderVue,
	},

	data: () => ({
		selected: '',
	}),

	props: {
		selection: String,

		modelValue: {
			type: Object,
			default: () => {
				return {
					enChangeCodeNumber:'',
					enChangeNo:'',
                    enChangeMoo:'',
                    enChangeAlley:'',
                    enChangeSoi:'',
                    enChangeRoad:'',
                    enChangeProvince:'',
                    enChangeDistrict:'',
                    enChangeSubDistrict:'',
                    enChangePostalCode:'',
                    enChangePhone:'',
					enAddArea:'',
					enAddRoom:'',
					enAddBed:'',
					enChangeNameThai:'',
					enChangeNameEng:'',
					enDissolution:'',
				}	
			}
		}
	},
	
	setup(props){
		const enChange = reactive(props.modelValue)
		return {
			enChange,
		}
	}

	}
	</script>
