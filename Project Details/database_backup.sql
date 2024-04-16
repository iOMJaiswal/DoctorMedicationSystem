PGDMP      0                |            doctormedicationsystem    16.0    16.0                0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                       1262    17491    doctormedicationsystem    DATABASE     �   CREATE DATABASE doctormedicationsystem WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'English_United States.1252';
 &   DROP DATABASE doctormedicationsystem;
                postgres    false            �            1259    17504    doctors    TABLE     �  CREATE TABLE public.doctors (
    doctor_id integer NOT NULL,
    name character varying(100) NOT NULL,
    email character varying(100) NOT NULL,
    password character varying(100) NOT NULL,
    specialization character varying(100),
    license_number character varying(50),
    phone character varying(20),
    address character varying(255),
    city character varying(100),
    state character varying(100),
    country character varying(100),
    postal_code character varying(20),
    bio text
);
    DROP TABLE public.doctors;
       public         heap    postgres    false            �            1259    17503    doctors_doctor_id_seq    SEQUENCE     �   CREATE SEQUENCE public.doctors_doctor_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ,   DROP SEQUENCE public.doctors_doctor_id_seq;
       public          postgres    false    216                       0    0    doctors_doctor_id_seq    SEQUENCE OWNED BY     O   ALTER SEQUENCE public.doctors_doctor_id_seq OWNED BY public.doctors.doctor_id;
          public          postgres    false    215            �            1259    17657    medications    TABLE     &  CREATE TABLE public.medications (
    medication_id integer NOT NULL,
    patient_id integer NOT NULL,
    medication_name character varying(255) NOT NULL,
    dosage character varying(255),
    frequency character varying(255),
    instructions text,
    start_date date,
    end_date date
);
    DROP TABLE public.medications;
       public         heap    postgres    false            �            1259    17656    medications_medication_id_seq    SEQUENCE     �   CREATE SEQUENCE public.medications_medication_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 4   DROP SEQUENCE public.medications_medication_id_seq;
       public          postgres    false    220                       0    0    medications_medication_id_seq    SEQUENCE OWNED BY     _   ALTER SEQUENCE public.medications_medication_id_seq OWNED BY public.medications.medication_id;
          public          postgres    false    219            �            1259    17604    patients    TABLE     /  CREATE TABLE public.patients (
    patient_id integer NOT NULL,
    name character varying(255) NOT NULL,
    date_of_birth date,
    gender character(1),
    phone_number character varying(20),
    email character varying(255),
    address text,
    city character varying(100),
    state character varying(100),
    zipcode character varying(20),
    country character varying(100),
    doctor_id integer NOT NULL,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);
    DROP TABLE public.patients;
       public         heap    postgres    false            �            1259    17603    patients_patient_id_seq    SEQUENCE     �   CREATE SEQUENCE public.patients_patient_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public.patients_patient_id_seq;
       public          postgres    false    218                       0    0    patients_patient_id_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public.patients_patient_id_seq OWNED BY public.patients.patient_id;
          public          postgres    false    217            Z           2604    17507    doctors doctor_id    DEFAULT     v   ALTER TABLE ONLY public.doctors ALTER COLUMN doctor_id SET DEFAULT nextval('public.doctors_doctor_id_seq'::regclass);
 @   ALTER TABLE public.doctors ALTER COLUMN doctor_id DROP DEFAULT;
       public          postgres    false    215    216    216            ^           2604    17660    medications medication_id    DEFAULT     �   ALTER TABLE ONLY public.medications ALTER COLUMN medication_id SET DEFAULT nextval('public.medications_medication_id_seq'::regclass);
 H   ALTER TABLE public.medications ALTER COLUMN medication_id DROP DEFAULT;
       public          postgres    false    219    220    220            [           2604    17607    patients patient_id    DEFAULT     z   ALTER TABLE ONLY public.patients ALTER COLUMN patient_id SET DEFAULT nextval('public.patients_patient_id_seq'::regclass);
 B   ALTER TABLE public.patients ALTER COLUMN patient_id DROP DEFAULT;
       public          postgres    false    218    217    218            �          0    17504    doctors 
   TABLE DATA           �   COPY public.doctors (doctor_id, name, email, password, specialization, license_number, phone, address, city, state, country, postal_code, bio) FROM stdin;
    public          postgres    false    216   �%       �          0    17657    medications 
   TABLE DATA           �   COPY public.medications (medication_id, patient_id, medication_name, dosage, frequency, instructions, start_date, end_date) FROM stdin;
    public          postgres    false    220   l(       �          0    17604    patients 
   TABLE DATA           �   COPY public.patients (patient_id, name, date_of_birth, gender, phone_number, email, address, city, state, zipcode, country, doctor_id, created_at, updated_at) FROM stdin;
    public          postgres    false    218   S,                  0    0    doctors_doctor_id_seq    SEQUENCE SET     C   SELECT pg_catalog.setval('public.doctors_doctor_id_seq', 6, true);
          public          postgres    false    215            	           0    0    medications_medication_id_seq    SEQUENCE SET     L   SELECT pg_catalog.setval('public.medications_medication_id_seq', 31, true);
          public          postgres    false    219            
           0    0    patients_patient_id_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public.patients_patient_id_seq', 9, true);
          public          postgres    false    217            `           2606    17513    doctors doctors_email_key 
   CONSTRAINT     U   ALTER TABLE ONLY public.doctors
    ADD CONSTRAINT doctors_email_key UNIQUE (email);
 C   ALTER TABLE ONLY public.doctors DROP CONSTRAINT doctors_email_key;
       public            postgres    false    216            b           2606    17511    doctors doctors_pkey 
   CONSTRAINT     Y   ALTER TABLE ONLY public.doctors
    ADD CONSTRAINT doctors_pkey PRIMARY KEY (doctor_id);
 >   ALTER TABLE ONLY public.doctors DROP CONSTRAINT doctors_pkey;
       public            postgres    false    216            f           2606    17664    medications medications_pkey 
   CONSTRAINT     e   ALTER TABLE ONLY public.medications
    ADD CONSTRAINT medications_pkey PRIMARY KEY (medication_id);
 F   ALTER TABLE ONLY public.medications DROP CONSTRAINT medications_pkey;
       public            postgres    false    220            d           2606    17613    patients patients_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public.patients
    ADD CONSTRAINT patients_pkey PRIMARY KEY (patient_id);
 @   ALTER TABLE ONLY public.patients DROP CONSTRAINT patients_pkey;
       public            postgres    false    218            h           2606    17670 !   medications fk_medication_patient    FK CONSTRAINT     �   ALTER TABLE ONLY public.medications
    ADD CONSTRAINT fk_medication_patient FOREIGN KEY (patient_id) REFERENCES public.patients(patient_id);
 K   ALTER TABLE ONLY public.medications DROP CONSTRAINT fk_medication_patient;
       public          postgres    false    220    218    4708            i           2606    17665 '   medications medications_patient_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.medications
    ADD CONSTRAINT medications_patient_id_fkey FOREIGN KEY (patient_id) REFERENCES public.patients(patient_id) ON DELETE CASCADE;
 Q   ALTER TABLE ONLY public.medications DROP CONSTRAINT medications_patient_id_fkey;
       public          postgres    false    4708    220    218            g           2606    17614     patients patients_doctor_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.patients
    ADD CONSTRAINT patients_doctor_id_fkey FOREIGN KEY (doctor_id) REFERENCES public.doctors(doctor_id);
 J   ALTER TABLE ONLY public.patients DROP CONSTRAINT patients_doctor_id_fkey;
       public          postgres    false    4706    218    216            �   �  x�}�Ms�0���W��kR ������)��0{��^�DClgm��~�$����Fr,K�+�DL]�*+$�0����������M��8�Z�c%���1w���*�bxs{��t�u�30�[X���j�`j�P�X���ʃ4`OI���郯0S�T�ʬA�O�<h��RT�L �U)3�Hv���3��-��<!
�V\"^�2����Y�����#C�܊3J�I�ϒa�G�C126�j��>#7\�P�B~ʢ|��
�[E�(�JB���~K^fM���ƃ�f��+g5Ȍ4��$M�.�u��ܫƎ��َ_پ��O���tF���
+�no��h�#���Eo�����~v���+��v[�9�>��3J�,�dB��rX��j�t��tG�t�^e�ae�|W�L�Ȳ����3��jWlȌ=�
x�v49m�ł*����4D�t�]�<<���~B�_R7���'���fU� �c��?JP����2u�g�*s��R�6?�L-
\߯�Te}���u��//��y�f�����<\�z�S�{_�~w�J��h�1�d�&z�xyo���t�j��&g��o��t١� �V��9��q<���}��ىWKoG/�J��G�ӊ�=:�u����wF!~��w:�?.L��      �   �  x��VMo�F=/�ܚ �@.E�>I�H���eEŭ�\awi���}K��(l8�r�G29���{Õ"?�)τe�o���]=����U�Pg}pڼ7[]2UJ��޴�u�[��*�;��[�Q�L[6�V\[��{�э6�Vᷭry��M@���X�=)82����>��$sq��� ��(���,�����O��
@Q�2����@�_�}P����Һ*v�ҕ-�u?x A���v~F-�ZG+c-��k�Ƞa�4ֳp��_~I�7���Q�i�?ޱh~����Γ��1W<�A�Fp��Չ����wP��u۷SC��j>���~� ����&����:�c�;�}8��Ɉ�K��lhg�#u�,- �8�a.�H9�GZE��ɂQ���Sju���f"�(�����\�R���Hr�������Z��Z���)�)�ʱ��Qs�`�CC����'[�Vv3��+]�3*ޞE<c*���.��@�,E&�AP����Qu��W���V{�X. ��*���rD�X�q
Z�o�[ugu�0&�7��E�y��"�P䯎�N{۳�Ӽ��H�diT�o1ǡ�t�y�o��2+��Y�Ge�lI�����:Q�o��;�Sk�zL��a��樘7�!��(0�,�2(�E3�����j�ڭ��YsF �D
\@�9�����A�w���LK hmz]��7C�F��2?��$�_x
s8��Ѕ�!\�-_���b�9t�����y�����^{��4����v�a�-�����-.^��͊$�|���}x��*���w`%�@��G-<��y�㍕g�������8[sL�W�8T�e���醺Ld���3��-c���׸839{nW=�r<=?m6}u9^�x�NOG�.����,������j
(��'�M.4����:�E"������#���qREX��$O���?�����.R&_fI���+��      �   �  x�}��n�0�ϫ��=��H��v��@c8�[��^XiQ��$Cr���Kʁ�4�^�-?�rsX�jmɳ"�����,��	�r�
mJh�&�>�_�l<�k hli��tG����}����(�.|[M!�Ld22E�0�H3��LY�#%V��k�����Ϩ1E�p�~%�!����u���=��ج{�}3{\Mp� ��#��Ő��R����(�۝�����T*b���؎��h�Ϯ�$�0g>ټw;����m���S8f���p���S�w�D����نE�!�i��,X#�)8���G���`����={��"XVd۝�}d{���
De�\�D-��~.%���Ӂ��n���b*��;���� ���\_��Sgkx
1�����al���S�D伐%��ϥa�j�F`��i!���-�;�j��k�j�ma���n!��]ޜi�p�
�e8���<I�����     