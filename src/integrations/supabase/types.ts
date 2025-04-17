export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      admin_audit_logs: {
        Row: {
          action: string
          admin_id: string | null
          created_at: string
          entity_id: string | null
          entity_type: string
          id: string
          new_data: Json | null
          previous_data: Json | null
        }
        Insert: {
          action: string
          admin_id?: string | null
          created_at?: string
          entity_id?: string | null
          entity_type: string
          id?: string
          new_data?: Json | null
          previous_data?: Json | null
        }
        Update: {
          action?: string
          admin_id?: string | null
          created_at?: string
          entity_id?: string | null
          entity_type?: string
          id?: string
          new_data?: Json | null
          previous_data?: Json | null
        }
        Relationships: []
      }
      admin_users: {
        Row: {
          created_at: string
          email: string
          first_name: string
          id: string
          last_name: string
          role: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          email: string
          first_name: string
          id: string
          last_name: string
          role: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          email?: string
          first_name?: string
          id?: string
          last_name?: string
          role?: string
          updated_at?: string
        }
        Relationships: []
      }
      bookings: {
        Row: {
          created_at: string
          customer_id: string
          end_date: string
          id: string
          notes: string | null
          property_id: string
          start_date: string
          status: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          customer_id: string
          end_date: string
          id?: string
          notes?: string | null
          property_id: string
          start_date: string
          status: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          customer_id?: string
          end_date?: string
          id?: string
          notes?: string | null
          property_id?: string
          start_date?: string
          status?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "bookings_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "bookings_property_id_fkey"
            columns: ["property_id"]
            isOneToOne: false
            referencedRelation: "properties"
            referencedColumns: ["id"]
          },
        ]
      }
      content: {
        Row: {
          content: string | null
          created_at: string
          id: string
          page: string
          published: boolean | null
          slug: string
          title: string
          updated_at: string
        }
        Insert: {
          content?: string | null
          created_at?: string
          id?: string
          page: string
          published?: boolean | null
          slug: string
          title: string
          updated_at?: string
        }
        Update: {
          content?: string | null
          created_at?: string
          id?: string
          page?: string
          published?: boolean | null
          slug?: string
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      customers: {
        Row: {
          created_at: string
          email: string
          id: string
          name: string
          phone: string | null
          status: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          email: string
          id?: string
          name: string
          phone?: string | null
          status: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
          name?: string
          phone?: string | null
          status?: string
          updated_at?: string
        }
        Relationships: []
      }
      hemsida: {
        Row: {
          created_at: string
          id: number
        }
        Insert: {
          created_at?: string
          id?: number
        }
        Update: {
          created_at?: string
          id?: number
        }
        Relationships: []
      }
      leads: {
        Row: {
          created_at: string
          email: string
          exported_to_hubspot: boolean
          id: string
          meeting_date: string | null
          meeting_time: string | null
          meeting_type: string | null
          message: string | null
          name: string
          phone: string
          source: string
          status: string
          subject: string | null
        }
        Insert: {
          created_at?: string
          email: string
          exported_to_hubspot?: boolean
          id?: string
          meeting_date?: string | null
          meeting_time?: string | null
          meeting_type?: string | null
          message?: string | null
          name: string
          phone: string
          source: string
          status?: string
          subject?: string | null
        }
        Update: {
          created_at?: string
          email?: string
          exported_to_hubspot?: boolean
          id?: string
          meeting_date?: string | null
          meeting_time?: string | null
          meeting_type?: string | null
          message?: string | null
          name?: string
          phone?: string
          source?: string
          status?: string
          subject?: string | null
        }
        Relationships: []
      }
      properties: {
        Row: {
          amenities: string | null
          available_shares: number
          bathrooms: number | null
          beach_distance: number | null
          bedrooms: number | null
          built_year: number | null
          cover_image: string | null
          created_at: string
          description: string | null
          has_pool: boolean | null
          id: string
          location: string
          name: string
          plot_size: number | null
          price: number
          property_size: number | null
          status: string
          total_shares: number
          updated_at: string
        }
        Insert: {
          amenities?: string | null
          available_shares: number
          bathrooms?: number | null
          beach_distance?: number | null
          bedrooms?: number | null
          built_year?: number | null
          cover_image?: string | null
          created_at?: string
          description?: string | null
          has_pool?: boolean | null
          id?: string
          location: string
          name: string
          plot_size?: number | null
          price: number
          property_size?: number | null
          status: string
          total_shares: number
          updated_at?: string
        }
        Update: {
          amenities?: string | null
          available_shares?: number
          bathrooms?: number | null
          beach_distance?: number | null
          bedrooms?: number | null
          built_year?: number | null
          cover_image?: string | null
          created_at?: string
          description?: string | null
          has_pool?: boolean | null
          id?: string
          location?: string
          name?: string
          plot_size?: number | null
          price?: number
          property_size?: number | null
          status?: string
          total_shares?: number
          updated_at?: string
        }
        Relationships: []
      }
      property_images: {
        Row: {
          created_at: string | null
          id: string
          image_name: string
          image_url: string
          is_cover: boolean | null
          property_id: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          image_name: string
          image_url: string
          is_cover?: boolean | null
          property_id: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          image_name?: string
          image_url?: string
          is_cover?: boolean | null
          property_id?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "property_images_property_id_fkey"
            columns: ["property_id"]
            isOneToOne: false
            referencedRelation: "properties"
            referencedColumns: ["id"]
          },
        ]
      }
      property_shares: {
        Row: {
          created_at: string
          customer_id: string
          id: string
          property_id: string
          purchase_date: string
          purchase_price: number
          shares_count: number
          updated_at: string
        }
        Insert: {
          created_at?: string
          customer_id: string
          id?: string
          property_id: string
          purchase_date?: string
          purchase_price: number
          shares_count: number
          updated_at?: string
        }
        Update: {
          created_at?: string
          customer_id?: string
          id?: string
          property_id?: string
          purchase_date?: string
          purchase_price?: number
          shares_count?: number
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "property_shares_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "property_shares_property_id_fkey"
            columns: ["property_id"]
            isOneToOne: false
            referencedRelation: "properties"
            referencedColumns: ["id"]
          },
        ]
      }
      prospects: {
        Row: {
          created_at: string
          customer_email: string | null
          customizations: Json
          id: string
          name: string | null
          property_id: string
          seller_id: string
        }
        Insert: {
          created_at?: string
          customer_email?: string | null
          customizations: Json
          id?: string
          name?: string | null
          property_id: string
          seller_id: string
        }
        Update: {
          created_at?: string
          customer_email?: string | null
          customizations?: Json
          id?: string
          name?: string | null
          property_id?: string
          seller_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "fk_property"
            columns: ["property_id"]
            isOneToOne: false
            referencedRelation: "properties"
            referencedColumns: ["id"]
          },
        ]
      }
      support_tickets: {
        Row: {
          attachment_url: string | null
          created_at: string
          customer_id: string
          id: string
          message: string
          status: string
          subject: string
          updated_at: string
        }
        Insert: {
          attachment_url?: string | null
          created_at?: string
          customer_id: string
          id?: string
          message: string
          status?: string
          subject: string
          updated_at?: string
        }
        Update: {
          attachment_url?: string | null
          created_at?: string
          customer_id?: string
          id?: string
          message?: string
          status?: string
          subject?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "support_tickets_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
